import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .score {
    color: DodgerBlue;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    background-size: 100%;
    color: crimson;
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }
  .start,
  .next {
    background: crimson;
    color: #fff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
//  max-width: 1100px;
export const QuestionWrapper = styled.div`

  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  p {
    font-size: 1rem;
  }
`;

export const ButtonWrapper = styled.div`
  transition: all 0.3s ease;

  button {
    user-select: none;
    font-size: 0.9rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? "limegreen"
        : !correct && userClicked
        ? "linear-gradient(90deg,#ff5658,#ff5856)"
        : "linear-gradient(90deg,#56ccff,#6eafb4)"};

    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    border-radius: 10px;

    color: ${({ correct, userClicked }) => (!correct ? "#fff" : "black")};
  }
`;
