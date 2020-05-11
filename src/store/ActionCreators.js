import {
  SET_QUIZ_QUESTIONS,
  INCREMENT_RIGHT_ANSWERS,
  UPDATE_CURRENT_QUESTION,
  MARK_CATEGORY_SELECTED,
  RESET_GAME
} from './ActionTypes';

export const setQuizQuestions = data => {
  return {
    type: SET_QUIZ_QUESTIONS,
    quizData: data
  };
};


export const incrementRightAnswers = () => {
  return {
    type: INCREMENT_RIGHT_ANSWERS,
  };
};

export const updateCurrentQuestion = () => {
  return {
    type: UPDATE_CURRENT_QUESTION,
  };
};

export const markCategorySelected = () => {
  return {
    type: MARK_CATEGORY_SELECTED
  };
};

export const resetGame = () => {
  return {
    type: RESET_GAME
  };
};


export const  getAPIQuestions = (categoryId) =>{
  return dispatch =>
    fetch(`https://opentdb.com/api.php?amount=10&category=${categoryId}&encode=base64`)
      .then(response => response.json())
      .then(
        quizData => {
          dispatch(setQuizQuestions(quizData.results));
        })

        .catch((err) => {
      throw new Error(`fetching the quiz failed ${err}`);
    });
}


