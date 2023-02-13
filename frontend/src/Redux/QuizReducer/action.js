import * as types from "./actionType";
import axios from "axios";
import {fetchQuizQuestions} from '../../components/API'


export const getQuiz = (amount, difficulty) => async (dispatch) => {
  dispatch({ type: types.GET_QUIZ_REQ });
  return await fetchQuizQuestions(amount, difficulty)
    .then((res) => {
      
      dispatch({ type: types.GET_QUIZ, payload: res });
    })
    .catch((er) => dispatch({ type: types.GET_QUIZ_FAILURE }));

};
