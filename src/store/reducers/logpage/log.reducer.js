import * as logActions from "../../actions";
const initialState = {
  log: [],
  sensor_id: [],
};

export const logs = (state = initialState, action) => {
  switch (action.type) {
    case logActions.GET_LOGS: {
      console.log("logs===", action.payload);
      return {
        ...state,
        log: action.payload.data,
        sensor_id: action.payload.sensor_id,
      };
    }
    case logActions.GET_FILTER_LOGS: {
      return {
        ...state,
        log: action.payload.data,
        sensor_id: action.payload.sensor_id,
      };
    }

    default:
      return state;
  }
};
