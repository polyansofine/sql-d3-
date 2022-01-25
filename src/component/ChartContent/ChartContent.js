import React, { useEffect, useRef, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";

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

  useEffect(() => {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create(props.sort, am4charts.XYChart);

    chart.dateFormatter.dateFormat = "yyyy-MM-dd";

    // Add data
    chart.data = generatechartData();

    /**
     * Use separate DateFormatter for X axis, so we can set different format
     * (this presumes that X axis of type DateAxis was already created)
     */

    function generatechartData() {
      let chartData = [];
      if (props.sort == "value_light") {
        chartData = props.values?.map(({ record_id, value_light }) => ({
          record_id: new Date(Date.parse(record_id)),
          value_light,
        }));
      }
      if (props.sort == "value_temp") {
        chartData = props.values?.map(({ record_id, value_temp }) => ({
          record_id: new Date(Date.parse(record_id)),
          value_temp,
        }));
      }
      if (props.sort == "value_sound") {
        chartData = props.values?.map(({ record_id, value_sound }) => ({
          record_id: new Date(Date.parse(record_id)),
          value_sound,
        }));
      }
      if (props.sort == "value_humidity") {
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
    valueAxis.title.text = `${props.sort}`;

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    if (props.sort == "value_temp") {
      series.dataFields.valueY = "value_temp";
      series.fill = am4core.color("#e07a5f");
      series.stroke = am4core.color("#e07a5f");
    }
    if (props.sort == "value_humidity") {
      series.dataFields.valueY = "value_humidity";
      series.fill = am4core.color("#00b4d8");
      series.stroke = am4core.color("#00b4d8");
    }
    if (props.sort == "value_light") {
      series.dataFields.valueY = "value_light";
      series.fill = am4core.color("#fca311");
      series.stroke = am4core.color("#fca311");
    }
    if (props.sort == "value_sound") {
      series.dataFields.valueY = "value_sound";
      series.fill = am4core.color("#583101");
      series.stroke = am4core.color("#583101");
    }
    series.dataFields.dateX = "record_id";
    series.strokeWidth = 1.5;
    series.tooltipText = "{dateX}  :  [b]{valueY.value}[/]";
    series.fillOpacity = 0.1;

    // Create a range to change stroke for values below 0
    // let range = valueAxis.createSeriesRange(series);
    if (props.sort == "value_temp") {
      var range = valueAxis.axisRanges.create();
      range.value = props.limit[0].t_day_threshold;
      // range.value = 1000;
      range.grid.stroke = am4core.color("#ffc300");
      range.grid.strokeWidth = 1.5;
      range.grid.strokeOpacity = 1;

      var range2 = valueAxis.axisRanges.create();
      range2.value = props.limit[0].t_night_threshold;
      range2.grid.stroke = am4core.color("#000814");
      range2.grid.strokeWidth = 1.5;
      range2.grid.strokeOpacity = 1;
      var range4 = valueAxis.axisRanges.create();
      range4.value = props.limit[0].t_alert_threshold;
      range4.grid.stroke = am4core.color("#d00000");
      range4.grid.strokeWidth = 1.5;
      range4.grid.strokeOpacity = 1;

      // range4.contents.stroke = am4core.color("#000814");
      // range4.contents.fill = range4.contents.stroke;
      // range4.contents.strokeOpacity = 0.9;
      // range4.contents.fillOpacity = 0.3;
    }
    if (props.sort == "value_humidity") {
      var range = valueAxis.axisRanges.create();
      range.value = props.limit[0].h_day_threshold;
      // range.value = 1000;
      range.grid.stroke = am4core.color("#ffc300");
      range.grid.strokeWidth = 1.5;
      range.grid.strokeOpacity = 1;

      var range2 = valueAxis.axisRanges.create();
      range2.value = props.limit[0].h_night_threshold;
      range2.grid.stroke = am4core.color("#000814");
      range2.grid.strokeWidth = 1.5;
      range2.grid.strokeOpacity = 1;
      var range4 = valueAxis.axisRanges.create();
      range4.value = props.limit[0].h_alert_threshold;
      range4.grid.stroke = am4core.color("#d00000");
      range4.grid.strokeWidth = 1.5;
      range4.grid.strokeOpacity = 1;
    }
    if (props.sort == "value_light") {
      var range = valueAxis.axisRanges.create();
      range.value = props.limit[0].l_day_threshold;
      // range.value = 1000;
      range.grid.stroke = am4core.color("#ffc300");
      range.grid.strokeWidth = 1.5;
      range.grid.strokeOpacity = 1;

      var range2 = valueAxis.axisRanges.create();
      range2.value = props.limit[0].l_night_threshold;
      range2.grid.stroke = am4core.color("#000814");
      range2.grid.strokeWidth = 1.5;
      range2.grid.strokeOpacity = 1;
      var range4 = valueAxis.axisRanges.create();
      range4.value = props.limit[0].l_alert_threshold;
      range4.grid.stroke = am4core.color("#d00000");
      range4.grid.strokeWidth = 1.5;
      range4.grid.strokeOpacity = 1;
    }
    if (props.sort == "value_sound") {
      var range = valueAxis.axisRanges.create();
      range.value = props.limit[0].s_day_threshold;
      // range.value = 1000;
      range.grid.stroke = am4core.color("#ffc300");
      range.grid.strokeWidth = 1.5;
      range.grid.strokeOpacity = 1;

      var range2 = valueAxis.axisRanges.create();
      range2.value = props.limit[0].s_night_threshold;
      range2.grid.stroke = am4core.color("#000814");
      range2.grid.strokeWidth = 1.5;
      range2.grid.strokeOpacity = 1;
      var range4 = valueAxis.axisRanges.create();
      range4.value = props.limit[0].s_alert_threshold;
      range4.grid.stroke = am4core.color("#d00000");
      range4.grid.strokeWidth = 1.5;
      range4.grid.strokeOpacity = 1;
    }

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.scrollbarX = new am4core.Scrollbar();

    series.tooltip.getFillFromObject = false;
    if (props.sort == "value_temp") {
      series.tooltip.adapter.add("x", (x, target) => {
        if (
          series.tooltip.tooltipDataItem.valueY <
          props.limit[0].t_alert_threshold
        ) {
          series.tooltip.background.fill = chart.colors.getIndex(7);
        } else {
          series.tooltip.background.fill = chart.colors.getIndex(0);
        }
        return x;
      });
    }
    if (props.sort == "value_sound") {
      series.tooltip.adapter.add("x", (x, target) => {
        if (
          series.tooltip.tooltipDataItem.valueY <
          props.limit[0].s_alert_threshold
        ) {
          series.tooltip.background.fill = chart.colors.getIndex(7);
        } else {
          series.tooltip.background.fill = chart.colors.getIndex(0);
        }
        return x;
      });
    }
    if (props.sort == "value_humidity") {
      series.tooltip.adapter.add("x", (x, target) => {
        if (
          series.tooltip.tooltipDataItem.valueY <
          props.limit[0].h_alert_threshold
        ) {
          series.tooltip.background.fill = chart.colors.getIndex(7);
        } else {
          series.tooltip.background.fill = chart.colors.getIndex(0);
        }
        return x;
      });
    }
    if (props.sort == "value_light") {
      series.tooltip.adapter.add("x", (x, target) => {
        if (
          series.tooltip.tooltipDataItem.valueY <
          props.limit[0].l_alert_threshold
        ) {
          series.tooltip.background.fill = chart.colors.getIndex(7);
        } else {
          series.tooltip.background.fill = chart.colors.getIndex(0);
        }
        return x;
      });
    }
  }, [props.value, props]);
  // const handleChange = (event, newAlignment) => {
  //   setSort(newAlignment);
  // };
  return (
    <>
      {/* <ToggleButtonGroup
        color="primary"
        value={sort}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="value_temp">Temperature</ToggleButton>
        <ToggleButton value="value_humidity">Humidity</ToggleButton>
        <ToggleButton value="value_light">Light</ToggleButton>
        <ToggleButton value="value_sound">Sound</ToggleButton>
      </ToggleButtonGroup> */}
      <div id={`${props.sort}`} style={{ minHeight: props.height }}></div>
    </>
  );
};

export default ChartContent;
