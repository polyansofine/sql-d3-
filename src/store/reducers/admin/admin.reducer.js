import * as adminActions from "../../actions";
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: Boolean(localStorage.getItem("token")),
  emails: [],
  limits: [],
};

export const admin = (state = initialState, action) => {
  switch (action.type) {
    case adminActions.LOGIN: {
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        isAuthenticated: true,
      };
    }
    case adminActions.LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
      };
    }
    case adminActions.GET_EMAIL: {
      return {
        ...state,
        emails: action.payload,
      };
    }
    case adminActions.UPDATE_EMAIL: {
      return {
        ...state,
        emails: action.payload,
      };
    }
    case adminActions.GET_LIMITS: {
      return {
        ...state,
        limits: action.payload,
      };
    }
    case adminActions.UPDATE_LIMITS: {
      return {
        ...state,
        limits: action.payload,
      };
    }

    default:
      return state;
  }
};
