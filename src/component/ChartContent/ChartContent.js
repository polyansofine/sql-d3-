import React, { useEffect, useRef, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

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
  // useEffect(() => {
  //   const margin = { top: 20, right: 30, bottom: 30, left: 40 };

  //   setGraphData(props?.height);

  //   const currentElement = divRef.current;
  //   const width = currentElement?.offsetWidth;
  //   const height = graphHeight;

  //   const documentElement = d3
  //     .select(currentElement)
  //     .call((g) => g.select("svg").remove())
  //     .append("svg")
  //     .attr("viewBox", `0,0,${width},${height}`);

  //   // const parseDate = d3.utcParse("%Y-%m-%dT%H:%M:%S%Z");
  //   // console.log("parseData=", new Date(Date.parse("2021-09-22T14:38:13.000Z")));
  //   let data = {};
  //   let d3Type = {};
  //   let yMax = 0;
  //   if (sort == "value_temp") {
  //     data = props.values?.map(({ record_id, value_temp }) => ({
  //       record_id: new Date(Date.parse(record_id)),
  //       value_temp,
  //     }));

  //     d3Type = d3
  //       .line()
  //       .x((value) => x(value.record_id))
  //       .y((value) => y(value.value_temp));
  //     yMax = d3.max(data, (d) => d.value_temp);
  //   }
  //   if (sort == "value_humidity") {
  //     data = props.values?.map(({ record_id, value_humidity }) => ({
  //       record_id: new Date(Date.parse(record_id)),
  //       value_humidity,
  //     }));

  //     d3Type = d3
  //       .line()
  //       .x((value) => x(value.record_id))
  //       .y((value) => y(value.value_humidity));
  //     yMax = d3.max(data, (d) => d.value_humidity);
  //   }
  //   if (sort == "value_light") {
  //     data = props.values?.map(({ record_id, value_light }) => ({
  //       record_id: new Date(Date.parse(record_id)),
  //       value_light,
  //     }));

  //     d3Type = d3
  //       .line()
  //       .x((value) => x(value.record_id))
  //       .y((value) => y(value.value_light));
  //     yMax = d3.max(data, (d) => d.value_light);
  //   }
  //   if (sort == "value_sound") {
  //     data = props.values?.map(({ record_id, value_sound }) => ({
  //       record_id: new Date(Date.parse(record_id)),
  //       value_sound,
  //     }));

  //     d3Type = d3
  //       .line()
  //       .x((value) => x(value.record_id))
  //       .y((value) => y(value.value_sound));
  //     yMax = d3.max(data, (d) => d.value_sound);
  //   }

  //   const xDomain = d3.extent(data, (d) => d.record_id);

  //   const x = d3
  //     .scaleUtc()
  //     .domain(xDomain)
  //     .range([margin.left, width - margin.right]);

  //   const y = d3
  //     .scaleLinear()
  //     .domain([0, yMax])
  //     .nice()
  //     .range([height - margin.bottom, margin.top]);

  //   const xAxis = (g) =>
  //     g.attr("transform", `translate(0,${height - margin.bottom})`).call(
  //       d3
  //         .axisBottom(x)
  //         .ticks(width / 80)
  //         .tickSizeOuter(0)
  //     );

  //   documentElement.append("g").call(xAxis);

  //   const yAxis = (g) =>
  //     g.attr("transform", `translate(${margin.left},0)`).call(d3.axisLeft(y));

  //   documentElement
  //     .append("g")
  //     .call(yAxis)
  //     .call((g) => g.select(".domain").remove());
  //   console.log("data==========", data);
  //   documentElement
  //     .append("path")
  //     .datum(data)
  //     .attr("fill", "none")
  //     .attr("stroke", "steelblue")
  //     .attr("stroke-width", 1.5)
  //     .attr("stroke-linejoin", "round")
  //     .attr("stroke-linecap", "round")
  //     .attr("d", (data) => d3Type(data));

  //   if (sort == "value_temp") {
  //     documentElement
  //       .append("g")
  //       .attr("transform", "translate(0, " + y(props.limit[0].value) + ")")
  //       .append("line")
  //       .attr("x2", width)
  //       .style("stroke", yMax > props.limit[0].value ? "red" : "#2ecc71")
  //       .style("stroke-width", "2px");
  //   }
  //   if (sort == "value_humidity") {
  //     documentElement
  //       .append("g")
  //       .attr("transform", "translate(0, " + y(props.limit[1].value) + ")")
  //       .append("line")
  //       .attr("x2", width)
  //       .style("stroke", yMax > props.limit[1].value ? "red" : "#2ecc71")
  //       .style("stroke-width", "2px");
  //   }
  //   if (sort == "value_light") {
  //     documentElement
  //       .append("g")
  //       .attr("transform", "translate(0, " + y(props.limit[2].value) + ")")
  //       .append("line")
  //       .attr("x2", width)
  //       .style("stroke", yMax > props.limit[2].value ? "red" : "#2ecc71")
  //       .style("stroke-width", "2px");
  //   }
  //   if (sort == "value_sound") {
  //     documentElement
  //       .append("g")
  //       .attr("transform", "translate(0, " + y(props.limit[3].value) + ")")
  //       .append("line")
  //       .attr("x2", width)
  //       .style("stroke", yMax > props.limit[3].value ? "red" : "#2ecc71")
  //       .style("stroke-width", "2px");
  //   }
  // }, [props.values, graphHeight, props, sort]);

  useEffect(() => {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    chart.dateFormatter.dateFormat = "yyyy-MM-dd";

    // Add data
    chart.data = generatechartData();

    /**
     * Use separate DateFormatter for X axis, so we can set different format
     * (this presumes that X axis of type DateAxis was already created)
     */

    function generatechartData() {
      let chartData = [];
      if (sort == "value_light") {
        chartData = props.values?.map(({ record_id, value_light }) => ({
          record_id: new Date(Date.parse(record_id)),
          value_light,
        }));
      }
      if (sort == "value_temp") {
        chartData = props.values?.map(({ record_id, value_temp }) => ({
          record_id: new Date(Date.parse(record_id)),
          value_temp,
        }));
      }
      if (sort == "value_sound") {
        chartData = props.values?.map(({ record_id, value_sound }) => ({
          record_id: new Date(Date.parse(record_id)),
          value_sound,
        }));
      }
      if (sort == "value_humidity") {
        chartData = props.values?.map(({ record_id, value_humidity }) => ({
          record_id: new Date(Date.parse(record_id)),
          value_humidity,
        }));
      }
      // let firstDate = new Date();
      // firstDate.setDate(firstDate.getDate() - 150);
      // let visits = -40;
      // let b = 0.6;
      // for (var i = 0; i < 150; i++) {
      //   // we create date objects here. In your data, you can have date strings
      //   // and then set format of your dates using chart.dataDateFormat property,
      //   // however when possible, use date objects, as this will speed up chart rendering.
      //   let newDate = new Date(firstDate);
      //   newDate.setDate(newDate.getDate() + i);
      //   if (i > 80) {
      //     b = 0.4;
      //   }
      //   visits += Math.round((Math.random() < b ? 1 : -1) * Math.random() * 10);

      console.log("chartdata=", chartData);
      return chartData;
    }

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.dateFormatter = new am4core.DateFormatter();
    dateAxis.title.text = "Time";
    // dateAxis.startLocation = 0.5;
    // dateAxis.endLocation = 0.5;

    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = `${sort}`;

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    if (sort == "value_temp") {
      series.dataFields.valueY = "value_temp";
    }
    if (sort == "value_humidity") {
      series.dataFields.valueY = "value_humidity";
    }
    if (sort == "value_light") {
      series.dataFields.valueY = "value_light";
    }
    if (sort == "value_sound") {
      series.dataFields.valueY = "value_sound";
    }
    series.dataFields.dateX = "record_id";
    series.strokeWidth = 2;
    series.tooltipText = "{valueY.value}";
    series.fillOpacity = 0.1;

    // Create a range to change stroke for values below 0
    let range = valueAxis.createSeriesRange(series);
    if (sort == "value_temp") {
      range.value = props.limit[0].value;
    }
    if (sort == "value_humidity") {
      range.value = props.limit[1].value;
    }
    if (sort == "value_light") {
      range.value = props.limit[2].value;
    }
    if (sort == "value_sound") {
      range.value = props.limit[3].value;
    }
    range.endValue = -1000;
    range.contents.stroke = chart.colors.getIndex(7);
    range.contents.fill = range.contents.stroke;
    range.contents.strokeOpacity = 0.9;
    range.contents.fillOpacity = 0.1;

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.scrollbarX = new am4core.Scrollbar();

    series.tooltip.getFillFromObject = false;
    if (sort == "value_temp") {
      series.tooltip.adapter.add("x", (x, target) => {
        if (series.tooltip.tooltipDataItem.valueY < props.limit[0].value) {
          series.tooltip.background.fill = chart.colors.getIndex(7);
        } else {
          series.tooltip.background.fill = chart.colors.getIndex(0);
        }
        return x;
      });
    }
    if (sort == "value_sound") {
      series.tooltip.adapter.add("x", (x, target) => {
        if (series.tooltip.tooltipDataItem.valueY < props.limit[3].value) {
          series.tooltip.background.fill = chart.colors.getIndex(7);
        } else {
          series.tooltip.background.fill = chart.colors.getIndex(0);
        }
        return x;
      });
    }
    if (sort == "value_humidity") {
      series.tooltip.adapter.add("x", (x, target) => {
        if (series.tooltip.tooltipDataItem.valueY < props.limit[1].value) {
          series.tooltip.background.fill = chart.colors.getIndex(7);
        } else {
          series.tooltip.background.fill = chart.colors.getIndex(0);
        }
        return x;
      });
    }
    if (sort == "value_light") {
      series.tooltip.adapter.add("x", (x, target) => {
        if (series.tooltip.tooltipDataItem.valueY < props.limit[2].value) {
          series.tooltip.background.fill = chart.colors.getIndex(7);
        } else {
          series.tooltip.background.fill = chart.colors.getIndex(0);
        }
        return x;
      });
    }
  }, [props.value, sort, props]);
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
      <div id="chartdiv" style={{ height: "600px" }}></div>
    </>
  );
};

export default ChartContent;
