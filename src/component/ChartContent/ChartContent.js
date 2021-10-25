import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// interface LineChartData {
//   d: string;
//   v: number;
// }

// interface LineChartProps {
//   height: number;
//   values: LineChartData[];
// }

const ChartContent = (props) => {
  const divRef = useRef(null);
  const [graphHeight, setGraphData] = useState(0);
  const [sort, setSort] = React.useState("value_temp");
  useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    setGraphData(props?.height);

    const currentElement = divRef.current;
    const width = currentElement?.offsetWidth;
    const height = graphHeight;

    const documentElement = d3
      .select(currentElement)
      .call((g) => g.select("svg").remove())
      .append("svg")
      .attr("viewBox", `0,0,${width},${height}`);

    // const parseDate = d3.utcParse("%Y-%m-%dT%H:%M:%S%Z");
    // console.log("parseData=", new Date(Date.parse("2021-09-22T14:38:13.000Z")));
    let data = {};
    let d3Type = {};
    let yMax = 0;
    if (sort == "value_temp") {
      data = props.values?.map(({ record_id, value_temp }) => ({
        record_id: new Date(Date.parse(record_id)),
        value_temp,
      }));

      d3Type = d3
        .line()
        .x((value) => x(value.record_id))
        .y((value) => y(value.value_temp));
      yMax = d3.max(data, (d) => d.value_temp);
    }
    if (sort == "value_humidity") {
      data = props.values?.map(({ record_id, value_humidity }) => ({
        record_id: new Date(Date.parse(record_id)),
        value_humidity,
      }));

      d3Type = d3
        .line()
        .x((value) => x(value.record_id))
        .y((value) => y(value.value_humidity));
      yMax = d3.max(data, (d) => d.value_humidity);
    }
    if (sort == "value_light") {
      data = props.values?.map(({ record_id, value_light }) => ({
        record_id: new Date(Date.parse(record_id)),
        value_light,
      }));

      d3Type = d3
        .line()
        .x((value) => x(value.record_id))
        .y((value) => y(value.value_light));
      yMax = d3.max(data, (d) => d.value_light);
    }
    if (sort == "value_sound") {
      data = props.values?.map(({ record_id, value_sound }) => ({
        record_id: new Date(Date.parse(record_id)),
        value_sound,
      }));

      d3Type = d3
        .line()
        .x((value) => x(value.record_id))
        .y((value) => y(value.value_sound));
      yMax = d3.max(data, (d) => d.value_sound);
    }

    const xDomain = d3.extent(data, (d) => d.record_id);

    const x = d3
      .scaleUtc()
      .domain(xDomain)
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([0, yMax])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const xAxis = (g) =>
      g.attr("transform", `translate(0,${height - margin.bottom})`).call(
        d3
          .axisBottom(x)
          .ticks(width / 80)
          .tickSizeOuter(0)
      );

    documentElement.append("g").call(xAxis);

    const yAxis = (g) =>
      g.attr("transform", `translate(${margin.left},0)`).call(d3.axisLeft(y));

    documentElement
      .append("g")
      .call(yAxis)
      .call((g) => g.select(".domain").remove());

    documentElement
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", (data) => d3Type(data));
    if (sort == "value_temp") {
      documentElement
        .append("g")
        .attr("transform", "translate(0, " + y(props.limit[0].value) + ")")
        .append("line")
        .attr("x2", width)
        .style("stroke", yMax > props.limit[0].value ? "red" : "#2ecc71")
        .style("stroke-width", "2px");
    }
    if (sort == "value_humidity") {
      documentElement
        .append("g")
        .attr("transform", "translate(0, " + y(props.limit[1].value) + ")")
        .append("line")
        .attr("x2", width)
        .style("stroke", yMax > props.limit[1].value ? "red" : "#2ecc71")
        .style("stroke-width", "2px");
    }
    if (sort == "value_light") {
      documentElement
        .append("g")
        .attr("transform", "translate(0, " + y(props.limit[2].value) + ")")
        .append("line")
        .attr("x2", width)
        .style("stroke", yMax > props.limit[2].value ? "red" : "#2ecc71")
        .style("stroke-width", "2px");
    }
    if (sort == "value_sound") {
      documentElement
        .append("g")
        .attr("transform", "translate(0, " + y(props.limit[3].value) + ")")
        .append("line")
        .attr("x2", width)
        .style("stroke", yMax > props.limit[3].value ? "red" : "#2ecc71")
        .style("stroke-width", "2px");
    }
  }, [props.values, graphHeight, props, sort]);
  const handleChange = (event, newAlignment) => {
    setSort(newAlignment);
  };
  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={sort}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="value_temp">Temperature</ToggleButton>
        <ToggleButton value="value_humidity">Humidity</ToggleButton>
        <ToggleButton value="value_light">Light</ToggleButton>
        <ToggleButton value="value_sound">Sound</ToggleButton>
      </ToggleButtonGroup>
      <h2> Line Chart </h2>
      <div
        ref={divRef}
        style={{
          width: "100%",
          height: graphHeight,
        }}
      />
    </>
  );
};

export default ChartContent;
