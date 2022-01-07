import axios from "axios";
import { apiUrl } from "../../../common/config";
import * as fuseActions from "../../actions";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GET_EMAIL = "GET_EMAIL";
export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_LIMITS = "UPDATE_LIMITS";
export const GET_LIMITS = "GET_LIMITS";

export const login = (data, history) => async (dispatch) => {
  try {
    let res = await axios.post(`${apiUrl}admin/login`, data);
    console.log("res==", res.data);
    dispatch({ type: LOGIN, payload: res.data });
    dispatch(
      fuseActions.showMessage({ message: "login success", variant: "success" })
    );
    history.push("/admin/setting/main");
  } catch (error) {
    console.log("error==", error);
    const { msg } = error.response.data;
    dispatch(fuseActions.showMessage({ message: msg, variant: "error" }));
  }
};
export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const getEmail = () => async (dispatch) => {
  try {
    let res = await axios.get(`${apiUrl}admin/getEmail`);
    dispatch({ type: GET_EMAIL, payload: res.data });
  } catch (error) {
    const { msg } = error.response.data;
    dispatch(fuseActions.showMessage({ message: msg, variant: "error" }));
  }
};
export const getLimits = (data) => async (dispatch) => {
  try {
    let res = await axios.get(`${apiUrl}admin/getLimits/${data}`);
    dispatch({ type: GET_LIMITS, payload: res.data });
  } catch (error) {
    const { msg } = error.response.data;
    dispatch(fuseActions.showMessage({ message: msg, variant: "error" }));
  }
};
export const emailUpdate = (data) => async (dispatch) => {
  try {
    let res = await axios.post(`${apiUrl}admin/emailUpdate`, data);
    dispatch({ type: UPDATE_EMAIL, payload: res.data });
    dispatch(
      fuseActions.showMessage({
        message: "email update success",
        variant: "success",
      })
    );
  } catch (error) {
    const { msg } = error.response.data;
    dispatch(fuseActions.showMessage({ message: msg, variant: "error" }));
  }
};
export const updateLimits = (data) => async (dispatch) => {
  try {
    let res = await axios.post(`${apiUrl}admin/updateLimits`, data);
    dispatch({ type: UPDATE_LIMITS, payload: res.data });
    dispatch(
      fuseActions.showMessage({
        message: "Limits update success",
        variant: "success",
      })
    );
  } catch (error) {
    const { msg } = error.response.data;
    dispatch(fuseActions.showMessage({ message: msg, variant: "error" }));
  }
};
