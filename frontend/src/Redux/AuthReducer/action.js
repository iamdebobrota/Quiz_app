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
  return axios
    .post("https://masaiquiz-x8kw.onrender.com/signup", payload)
    // .then((res) => {
    //   console.log(res);
    //   dispatch({ type: types.USER_SIGNUP, payload: res.data });
    // })
    // .catch((err) => {
    //   dispatch({ type: types.USER_FAILURE });
    //   alert(err.response.data.message)
    // });
};
