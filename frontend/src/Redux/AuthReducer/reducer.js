import {
  ADD_USER,
  USER_FAILURE,
  USER_REQ,
} from "./actionType";

const token = JSON.parse(localStorage.getItem("token")) || "";

const initState = {
  isAuth: token ? true : false,
  token: token,
  isError: false,
  isLoading: false,
};

export const AuthReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_REQ:
      return {
        ...state,
        isAuth: false,
        isLoading: true,
        isError: false,
      };
    case ADD_USER:
      localStorage.setItem("token", JSON.stringify(payload));
      return {
        ...state,
        isAuth: true,
        toke: payload,
        isLoading: false,
        isError: false,
      };
    case USER_FAILURE:
      return {
        ...state,
        isAuth: false,
        token: "",
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
