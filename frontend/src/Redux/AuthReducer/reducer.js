import {
  ADD_USER,
  ADMIN_LOGIN,
  USER_FAILURE,
  USER_LOGIN,
  USER_REQ,
  USER_SIGNUP,
} from "./actionType";

let token = localStorage.getItem("token") || "";

// const token="jhsabj"
const initState = {
  token: token,
  user:"",
  isError: false,
  isLoading: false,
  isAdmin: false
};

export const AuthReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_REQ:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case USER_LOGIN:
      // console.log(payload)
      localStorage.setItem("token", JSON.stringify(payload.token));
      return {
        ...state,
        token: payload.token,
        user:payload?.user?.name,
        isAdmin: payload?.user?.isAdmin? true: false,
        isLoading: false,
        isError: false,
      };
    case USER_SIGNUP:
      // localStorage.setItem("token", JSON.stringify(payload));
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
      
    case USER_FAILURE:
      return {
        ...state,
        token: "",
        isLoading: false,
        isError: true,
      };
      case ADMIN_LOGIN:
        return{
          ...state,
          token: payload.token
        }
    default:
      return state;
  }
};
