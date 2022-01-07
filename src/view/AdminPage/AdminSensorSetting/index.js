import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as adminActions from "../../../store/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "40px",
  },
}));
export const AdminSensorSetting = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    t_day_threshold: "",
    t_night_threshold: "",
    t_alert_threshold: "",
    h_day_threshold: "",
    h_night_threshold: "",
    h_alert_threshold: "",
    s_day_threshold: "",
    s_night_threshold: "",
    s_alert_threshold: "",
    l_day_threshold: "",
    l_night_threshold: "",
    l_alert_threshold: "",
    settings_upd_time: "",
    location_id: "",
  });
  const { limits } = useSelector(({ admin }) => admin);
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (limits) {
      setValue({
        t_day_threshold: limits[0]?.t_day_threshold,
        t_night_threshold: limits[0]?.t_night_threshold,
        t_alert_threshold: limits[0]?.t_alert_threshold,
        h_day_threshold: limits[0]?.h_day_threshold,
        h_night_threshold: limits[0]?.h_night_threshold,
        h_alert_threshold: limits[0]?.h_alert_threshold,
        l_day_threshold: limits[0]?.l_day_threshold,
        l_night_threshold: limits[0]?.l_night_threshold,
        l_alert_threshold: limits[0]?.l_alert_threshold,
        s_day_threshold: limits[0]?.s_day_threshold,
        s_night_threshold: limits[0]?.s_night_threshold,
        s_alert_threshold: limits[0]?.s_alert_threshold,
        settings_upd_time: limits[0]?.settings_upd_time,
        location_id: limits[0]?.location_id,
      });
    }
  }, [limits]);

  const submit = () => {
    dispatch(adminActions.updateLimits(value));
  };
  return (
    <div className={classes.root}>
      <Grid container justifyContent="space-between">
        <Grid item md={4} container>
          <Typography color="plum" variant="h6">
            TEMPERATURE
          </Typography>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="caption">DAY THRESHOLD</Typography>
            <TextField
              type="number"
              onChange={handleChange}
              name="t_day_threshold"
              value={value.t_day_threshold}
            />
          </Grid>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="caption">NIGHT THRESHOLD</Typography>
            <TextField
              type="number"
              name="t_night_threshold"
              onChange={handleChange}
              value={value.t_night_threshold}
            />
          </Grid>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="caption">alert THRESHOLD</Typography>
            <TextField
              type="number"
              name="t_alert_threshold"
              onChange={handleChange}
              value={value.t_alert_threshold}
            />
          </Grid>
        </Grid>
        <Grid item md={4} container>
          <Typography color="plum" variant="h6">
            HUMIDITY
          </Typography>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="caption">DAY THRESHOLD</Typography>
            <TextField
              type="number"
              onChange={handleChange}
              name="h_day_threshold"
              value={value.h_day_threshold}
            />
          </Grid>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="caption">NIGHT THRESHOLD</Typography>
            <TextField
              type="number"
              name="h_night_threshold"
              onChange={handleChange}
              value={value.h_night_threshold}
            />
          </Grid>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="caption">alert THRESHOLD</Typography>
            <TextField
              type="number"
              onChange={handleChange}
              name="h_alert_threshold"
              value={value.h_alert_threshold}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between">
        <Grid item md={4} container>
          <Typography color="plum" variant="h6">
            SOUND
          </Typography>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="caption">DAY THRESHOLD</Typography>
            <TextField
              type="number"
              onChange={handleChange}
              name="s_day_threshold"
              value={value.s_day_threshold}
            />
          </Grid>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="caption">NIGHT THRESHOLD</Typography>
            <TextField
              type="number"
              name="s_night_threshold"
              onChange={handleChange}
              value={value.s_night_threshold}
            />
          </Grid>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="caption">alert THRESHOLD</Typography>
            <TextField
              type="number"
              name="s_alert_threshold"
              onChange={handleChange}
              value={value.s_alert_threshold}
            />
          </Grid>
        </Grid>
        <Grid item md={4} container>
          <Typography color="plum" variant="h6">
            LIGHT
          </Typography>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="caption">DAY THRESHOLD</Typography>
            <TextField
              type="number"
              onChange={handleChange}
              name="l_day_threshold"
              value={value.l_day_threshold}
            />
          </Grid>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="caption">NIGHT THRESHOLD</Typography>
            <TextField
              type="number"
              name="l_night_threshold"
              onChange={handleChange}
              value={value.l_night_threshold}
            />
          </Grid>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="caption">alert THRESHOLD</Typography>
            <TextField
              type="number"
              name="l_alert_threshold"
              onChange={handleChange}
              value={value.l_alert_threshold}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between">
        <Grid item md={4} container>
          <Typography color="plum" variant="h6">
            MAIN
          </Typography>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="caption">UPDATE TIME(S)</Typography>
            <TextField
              type="number"
              onChange={handleChange}
              name="settings_upd_time"
              value={value.settings_upd_time}
            />
          </Grid>
        </Grid>
        <Grid item md={4} container></Grid>
      </Grid>
      <Button onClick={submit}>Save</Button>
    </div>
  );
};
