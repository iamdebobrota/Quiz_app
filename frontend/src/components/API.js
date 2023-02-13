// for random array with sorting
export const shuffleArray = (array) =>
  [...array].sort(() => Math.random() - 0.5);

// dificulty enum

export const Difficulty = {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard",
};

// APi
export const fetchQuizQuestions = async (amount, difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=18&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data?.results?.map((question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
