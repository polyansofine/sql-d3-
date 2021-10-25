import * as chartActions from "../../actions";
const initialState = {
  data: [],
  limit: [],
  sensor_id: [],
};

export const chart = (state = initialState, action) => {
  switch (action.type) {
    case chartActions.GET_SENSOR_DATAS: {
      console.log("reducer===", action.payload);
      return {
        ...state,
        data: action.payload.data,
        limit: action.payload.limit,
        sensor_id: action.payload.sensor_id,
      };
    }
    case chartActions.GET_FILTER_DATA: {
      return {
        ...state,
        data: action.payload.data,
        limit: action.payload.limit,
        sensor_id: action.payload.sensor_id,
      };
    }

    default:
      return state;
  }
};
