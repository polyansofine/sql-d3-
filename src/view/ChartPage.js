import { Box, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChartContent from "../component/ChartContent/ChartContent";
import Header from "../component/Header";
import * as chartActions from "../store/actions";

export default function ChartPage() {
  const dispatch = useDispatch();
  const sqlData = useSelector(({ chart }) => chart.data);
  const limit = useSelector(({ chart }) => chart.limit);
  console.log("helloHchart page");

  // useEffect(() => {
  //   async function getData() {
  //     dispatch(chartActions.getDatas());
  //   }
  //   getData();
  // }, []);

  return (
    <div>
      <Header />
      {sqlData.length > 0 ? (
        <>
          <ChartContent
            height={400}
            sort="value_temp"
            values={sqlData}
            limit={limit}
          />
          <ChartContent
            height={400}
            sort="value_humidity"
            values={sqlData}
            limit={limit}
          />
          <ChartContent
            height={400}
            sort="value_light"
            values={sqlData}
            limit={limit}
          />
          <ChartContent
            height={400}
            sort="value_sound"
            values={sqlData}
            limit={limit}
          />
        </>
      ) : (
        // ["value_temp", "value_humidity", "value_light", "value_sound"].map(
        //   (item, index) => (

        // )

        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "60vh",
          }}
        >
          <Typography variant="h4">No data</Typography>
        </Box>
      )}
    </div>
  );
}
