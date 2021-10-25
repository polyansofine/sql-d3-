import { Box, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChartContent from "../component/ChartContent/ChartContent";
import * as chartActions from "../store/actions";

export default function ChartPage() {
  const dispatch = useDispatch();
  const sqlData = useSelector(({ chart }) => chart.data);
  const limit = useSelector(({ chart }) => chart.limit);
  console.log("helloHchart page");

  useEffect(() => {
    async function getData() {
      dispatch(chartActions.getDatas());
    }
    getData();
  }, []);

  return (
    <div>
      {sqlData.length > 0 ? (
        <ChartContent height={400} values={sqlData} limit={limit} />
      ) : (
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
