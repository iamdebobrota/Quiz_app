import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ButtonWrapper } from "../Styles/Styles";


const QuestionCard= ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {


  console.log(userAnswer)
  return <>
     <Box boxShadow='dark-lg' p='6' rounded='md' bg='white'>
   
 
      <Text className="number">
          Question: {questionNr} / {totalQuestions}
      </Text>
      <Text dangerouslySetInnerHTML={{__html: question}}/>
      <Stack>
        {answers.map(answer => (
            <ButtonWrapper 
             key={answer}
             correct={userAnswer?.correctAnswer===answer}
             userClicked={userAnswer?.answer===answer}
             >
                <button  disabled={userAnswer} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{__html: answer}}></span>
                </button>
            </ButtonWrapper>
        ))}
      </Stack>
      </Box>
  </>;
};

export default QuestionCard;