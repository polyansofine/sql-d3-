import React, { useEffect } from "react";
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
import * as chartActions from "../../../../store/actions";
import _ from "lodash";
import { useHistory } from "react-router-dom";
import * as adminActions from "../../../../store/actions";

export const AdminHeader = () => {
  const history = useHistory();
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector(({ admin }) => admin);
  const { sensor_id } = useSelector(({ chart }) => chart);
  const handleLocation = (e) => {
    setLocation(e.target.value);
    dispatch(adminActions.getLimits(e.target.value));
  };
  useEffect(() => {
    dispatch(chartActions.getDatas());
  }, []);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Button
                  color="inherit"
                  onClick={() => history.push("/admin/setting/main")}
                  //   onClick={() => {
                  //     setValue([null, null]);
                  //     setLocation("");
                  //     history.push("/");
                  //   }}
                >
                  MAIN SETTING
                </Button>
                <Button
                  color="inherit"
                  onClick={() => history.push("/admin/setting/sensor")}

                  //   onClick={() => {
                  //     setValue([null, null]);
                  //     setLocation("");
                  //     history.push("/logpage");
                  //   }}
                >
                  SENSOR SETTING
                </Button>
              </Grid>
            </Grid>
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
            {isAuthenticated && (
              <Button
                color="info"
                variant="contained"
                onClick={() => dispatch(adminActions.logout())}
              >
                Logout
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <AppBar position="static" color="secondary">
          <Toolbar sx={{}}>
            <Grid container spacing={4}>
              <Grid item md={2} xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="location">Location</InputLabel>
                  <Select
                    sx={{ height: "40px" }}
                    labelId="location"
                    value={location}
                    onChange={handleLocation}
                    label="location"
                  >
                    {sensor_id?.map((item, index) => {
                      return (
                        <MenuItem key={index} value={item.location_id}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>
              {/* <Grid item md={4} xs={8}>
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
              </Grid> */}
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
