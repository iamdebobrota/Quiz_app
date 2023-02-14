import React, { useEffect, useState } from "react";
import QuestionCard from "../components/QuestionCard";
import { GlobalStyle, Wrapper } from "../Styles/Styles";
import { useDispatch, useSelector } from "react-redux";
import { getQuiz } from "../Redux/QuizReducer/action";
import * as types from "../Redux/QuizReducer/actionType";
import {
  Box,
  Button,
  Container,
  Heading,
  Skeleton,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";

const TOTAL_QUESTIONS = 10;

export const Difficulty = {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard",
};

function QuizHome() {
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const toast = useToast();

  const { isLoading, isError, userAnswers, questions } = useSelector(
    (store) => store.quizReducer
  );
  const dispatch = useDispatch();

  const startTrivia = async () => {
    dispatch(getQuiz(TOTAL_QUESTIONS, Difficulty.EASY));
    setGameOver(false);
    setScore(0);
    setNumber(0);

    toast({
      title: `Quiz was srated`,
      status: "success",
      isClosable: true,
    });
  };

  const checkAnswer = (e) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      dispatch({ type: types.USER_ANSWER, payload: answerObject });
    }
  };

  const nextQuestions = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
      toast({
        title: "Congratulations",
        description: "You have submitted the quiz! you can start again.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <Container>
      <GlobalStyle />
      <Wrapper>
        <Heading as="h3">React Quiz</Heading>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS + 1 ? (
          <Button className="start" onClick={startTrivia}  >
            Start
          </Button>
        ) : null}
        {!gameOver ? <Text className="score">Score: {score}</Text> : null}
        {isLoading && <Heading>Loading....</Heading>}

        {isError && <Heading as="h2">Some error occured...</Heading>}
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
          <Button
            className="next"
            _hover={{
              color: "black",
              bg: "white",
              border: "2px solid crimson",
            }}
            variant={"solid"}
           
            onClick={nextQuestions}>
            {userAnswers.length === TOTAL_QUESTIONS
              ? "Submit"
              : "Next Question"}
          </Button>
        ) : userAnswers.length === TOTAL_QUESTIONS ? (
          <Box>Congratullation! Your score: {score}</Box>
        ) : null}
      </Wrapper>
    </Container>
  );
}

export default QuizHome;

// url: https://opentdb.com/api.php?amount=10
