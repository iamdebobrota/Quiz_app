import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
*{
    box-sizing: border-box;
    font-family: 'Catamaran' , sans-serif;
}
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

.score{
    color:DodgerBlue ;
    font-size:2rem;
    margin:0;
}
h1{
    background-size: 100%;
    color: crimson;
    font-size: 70px;
    font-weight:400;
    text-align: center;
    margin: 20px;
}
.start, .next{
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    border-radius: 10px;
    height:40px;
    margin: 20px 0;
    padding: 0 40px;
}
.start{
    max-width: 200px;
}
`
export const QuestionWrapper = styled.div`
  max-width: 1100px;
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
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? "limegreen"
        : !correct && userClicked
        ? "linear-gradient(90deg,#ff5656,#c16868)"
        : "linear-gradient(90deg,#56ccff,#6eafb4)"};
    border: 3px solid $fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }

`