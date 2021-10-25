import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Stack from "@mui/material/Stack";
import MobileDateRangePicker from "@mui/lab/MobileDateRangePicker";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import * as chartActions from "../store/actions";
import * as logActions from "../store/actions";
import { useHistory } from "react-router";
let tempData = {};
export default function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");
  const [period, setPeriod] = useState("");
  const [locationData, setLocationData] = useState([]);
  const [value, setValue] = React.useState([null, null]);
  const sensor_id = useSelector(({ chart }) => chart.sensor_id);
  const log_sensor_id = useSelector(({ logs }) => logs.sensor_id);
  console.log("history===", history.location.pathname);
  React.useEffect(() => {
    tempData = _.uniq(
      _.map(sensor_id.length > 1 ? sensor_id : log_sensor_id, "sensor_id")
    );

    setLocationData(
      tempData.sort(function (a, b) {
        return a - b;
      })
    );
  }, [sensor_id, log_sensor_id]);
  React.useEffect(() => {
    if (history.location.pathname == "/") {
      dispatch(
        chartActions.getFilterData(location ? location : -1, value ? value : -1)
      );
    }
    if (history.location.pathname == "/logpage") {
      dispatch(
        logActions.getFilterLogs(location ? location : -1, value ? value : -1)
      );
    }
    console.log("date===", value);
  }, [location, value]);

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handlePeriod = (e) => {
    setPeriod(e.target.value);
  };
  console.log("localdata==", locationData);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
          <Button
            color="inherit"
            onClick={() => {
              setValue([null, null]);
              setLocation("");
              history.push("/");
            }}
          >
            Chart
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              setValue([null, null]);
              setLocation("");
              history.push("/logpage");
            }}
          >
            Log
          </Button>
        </Toolbar>
      </AppBar>
      <AppBar position="static" color="secondary">
        <Toolbar sx={{ m: 2 }}>
          <Grid container justifyContent="center" spacing={4}>
            <Grid item md={2} xs={4}>
              <FormControl fullWidth>
                <InputLabel id="location">Location</InputLabel>
                <Select
                  labelId="location"
                  value={location}
                  onChange={handleLocation}
                  label="location"
                >
                  {locationData?.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item}>
                        Sensor_{item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={4} xs={8}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <MobileDateRangePicker
                    startText="Mobile start"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(startProps, endProps) => (
                      <React.Fragment>
                        <TextField {...startProps} />
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField {...endProps} />
                      </React.Fragment>
                    )}
                  />
                </Stack>
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
