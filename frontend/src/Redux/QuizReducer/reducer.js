import * as types from "./actionType";


let initState = {
  isLoading: false,
  isError: false,
  questions:[],
  number: 0,
  userAnswers: [],
  score: 0,
  gameOver: false
};


export const quizReducer = (state = initState, { payload, type }) => {
  switch (type) {
    case types.GET_QUIZ_REQ: return {
      ...state,
      isLoading: true,
      isError: false,
      gameOver: false
    }
    case types.GET_QUIZ_FAILURE: return {
      ...state,
      isLoading: false,
      isError: true,
      gameOver: false
    }
    case types.GET_QUIZ: 
    return {
     
      ...state,
      isLoading: false,
      isError: false,
      gameOver: false,
      number:0,
      userAnswers:[],
      questions: payload
    }
    case types.INC_SCORE: 
    return {
      ...state,
      isLoading: false,
      isError: false,
      gameOver: false,
    }
    case types.USER_ANSWER: 
    return {
      ...state,
      isLoading: false,
      isError: false,
      gameOver: false,
      userAnswers:  payload
    }
    default:
      return state;
  }
};
