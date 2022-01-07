import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as adminActions from "../../../store/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));
export const AdminMainSetting = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    notify_email: "",
    sec_email: "",
  });

  const { emails } = useSelector(({ admin }) => admin);
  useEffect(() => {
    dispatch(adminActions.getEmail());
  }, []);
  useEffect(() => {
    if (emails) {
      setValue({
        notify_email: emails[0]?.value,
        sec_email: emails[1]?.value,
      });
    }
  }, [emails]);
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const submit = () => {
    dispatch(adminActions.emailUpdate(value));
  };
  return (
    <div className={classes.root}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={3}>
          <TextField
            label="Notification email"
            value={value.notify_email}
            onChange={handleChange}
            fullWidth
            name="notify_email"
            sx={{ mb: 3 }}
          />
          <TextField
            label="Secondary email"
            value={value.sec_email}
            name="sec_email"
            onChange={handleChange}
            fullWidth
            sx={{ mb: 3 }}
          />

          <Button
            fullWidth
            color="success"
            variant="contained"
            onClick={submit}
          >
            save
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
