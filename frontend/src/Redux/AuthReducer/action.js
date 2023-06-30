import axios from "axios";
import * as types from "./actionType";

let url = "https://masaiquiz-x8kw.onrender.com";

export const signinFailed = () => ({
  type: types.USER_FAILURE,
});
export const signinSuccess = (payload) => ({
  type: types.USER_LOGIN,
  payload,
});

export const SingleUserAction = (payload) => ({
  type: types.SINGLE_USER_GET,
  payload,
});

//LOGIN
export const loginAction = (text) => async (dispatch) => {
  dispatch({ type: types.USER_REQ });
  return await axios
    .post("https://masaiquiz-x8kw.onrender.com/login", text)
    .then((res) => res.data);
};

//signup
export const signupAction = (payload) => (dispatch) => {
  dispatch({ type: types.USER_REQ });
  return axios.post("https://masaiquiz-x8kw.onrender.com/signup", payload);
};

// getUser
export const getSingleUser = (payload) => (dispatch) => {
  dispatch({ type: types.USER_REQ });
  return fetch("http://localhost:8080/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: payload,
    },
  }).then((res) => res.json())
  .then((res)=> dispatch(SingleUserAction(res.user)))
  .catch((er)=> dispatch({type:types.USER_FAILURE}))
};
