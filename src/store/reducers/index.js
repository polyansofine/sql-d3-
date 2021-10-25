import { combineReducers } from "redux";
import { chart } from "../reducers/chart/chart.reducer";
import { logs } from "../reducers/logpage/log.reducer";
const createReducer = (asyncReducers) =>
  combineReducers({
    chart,
    logs,
    ...asyncReducers,
  });

export default createReducer;
