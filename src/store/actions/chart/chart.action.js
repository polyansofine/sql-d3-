import axios from "axios";
import { apiUrl } from "../../../common/config";

export const GET_SENSOR_DATAS = "GET_SENSOR_DATAS";
export const GET_FILTER_DATA = "GET_FILTER_DATA";

export function getDatas() {
  const request = axios.get(`${apiUrl}getData`);
  return (dispatch) =>
    request
      .then((res) => {
        console.log("response==", res);
        dispatch({
          type: GET_SENSOR_DATAS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
}
export function getFilterData(location, period) {
  const request = axios.post(`${apiUrl}filterData`, { location, period });
  return (dispatch) =>
    request
      .then((res) => {
        console.log("response==", res);
        dispatch({
          type: GET_FILTER_DATA,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
}
