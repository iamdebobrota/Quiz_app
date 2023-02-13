import axios from "axios";
import * as types from "./actionType";

//LOGIN/ REGISTRATION
export const addUser = (payload) => (dispatch) => {
  dispatch({ type: types.USER_REQ });
  const { name, email, password } = payload;
  axios
    .post("https://reqres.in/api/users", {
      email,
      name,
      password,
    })
    .then((res) => dispatch({ type: types.USER_REQ, payload: res.data }))
    .catch((err) => dispatch({ type: types.USER_FAILURE }));
};
