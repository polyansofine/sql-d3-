import { Button, Grid, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as adminActions from "../../../store/actions";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));
export const AdminLogin = () => {
  const classes = useStyles();
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const submit = () => {
    dispatch(adminActions.login({ pass: pass }, history));
  };
  return (
    <div className={classes.root}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={3}>
          <Typography sx={{ mb: 3 }}>Login</Typography>

          <TextField
            type="password"
            fullWidth
            sx={{ mb: 3 }}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />

          <Button fullWidth variant="contained" onClick={submit}>
            Login
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
