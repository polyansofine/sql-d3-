import axios from "axios";
import { apiUrl } from "../../../common/config";

export const GET_LOGS = "GET_LOGS";
export const GET_FILTER_LOGS = "GET_FILTER_LOGS";

export function getLogs() {
  const request = axios.get(`${apiUrl}getLogs`);
  return (dispatch) =>
    request
      .then((res) => {
        console.log("response==", res);
        dispatch({
          type: GET_LOGS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
}
export function getFilterLogs(location, period) {
  console.log("action filter");
  const request = axios.post(`${apiUrl}filterLogs`, { location, period });
  return (dispatch) =>
    request
      .then((res) => {
        console.log("response==", res);
        dispatch({
          type: GET_FILTER_LOGS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
}
