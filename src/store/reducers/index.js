import { combineReducers } from "redux";
import { chart } from "../reducers/chart/chart.reducer";
import { logs } from "../reducers/logpage/log.reducer";
import { admin } from "../reducers/admin/admin.reducer";

import fuseReducers from "./fuse/index";
const createReducer = (asyncReducers) =>
  combineReducers({
    chart,
    logs,
    admin,
    fuseReducers,
    ...asyncReducers,
  });

export default createReducer;
