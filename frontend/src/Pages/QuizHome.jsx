import React, { useEffect, useState } from "react";
import { fetchQuizQuestions } from "../components/API";
import QuestionCard from "../components/QuestionCard";
import { GlobalStyle, Wrapper } from "../Styles/Styles";
import { useDispatch, useSelector } from "react-redux";
import { getQuiz } from "../Redux/QuizReducer/action";
import * as types from "../Redux/QuizReducer/actionType";
const TOTAL_QUESTIONS = 10;

export const Difficulty = {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard",
};

function QuizHome() {
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const {
    isLoading,
    isError,
    questions,
  } = useSelector((store) => store.quizReducer);
  const dispatch = useDispatch();


  const startTrivia = async () => {

    dispatch(getQuiz(TOTAL_QUESTIONS, Difficulty.EASY));
    setGameOver(false);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
  };



  const checkAnswer = (e) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct)setScore((prev) => prev + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestions = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };



  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>React Quiz</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS+1 ? (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        ) : null}
        {!gameOver ? <p className="score">Score: {score}</p> : null}
        {isLoading && <p>Loading Questions...</p>}
        {isError && <h1>Some error occured...</h1>}
        {!isLoading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !isLoading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS ? (
          <button className="next" onClick={nextQuestions}>
            Next Question
          </button>
        ) : userAnswers.length === TOTAL_QUESTIONS ? (
          <div>Congratullation! Your score: {score}</div>
        ) : null}
      </Wrapper>
    </>
  );
}

export default QuizHome;

// url: https://opentdb.com/api.php?amount=10
