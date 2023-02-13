import React from "react";
import { ButtonWrapper, QuestionWrapper } from "../Styles/Styles";


const QuestionCard= ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return <QuestionWrapper>
      <p className="number">
          Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{__html: question}}/>
      <div>
        {answers.map(answer => (
            <ButtonWrapper 
             key={answer}
             correct={userAnswer?.correctAnswer===answer}
             userClicked={userAnswer?.answer===answer}
             >
                <button disabled={userAnswer?true:false} value={answer} onClick={callback}>
                    <span dangerouslySetInnerHTML={{__html: answer}}></span>
                </button>
            </ButtonWrapper>
        ))}
      </div>
  </QuestionWrapper>;
};

export default QuestionCard;