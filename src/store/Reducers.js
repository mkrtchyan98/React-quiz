import {
  SET_QUIZ_QUESTIONS,
  INCREMENT_RIGHT_ANSWERS,
  UPDATE_CURRENT_QUESTION,
  MARK_CATEGORY_SELECTED,
  RESET_GAME
} from './ActionTypes';


export const initialState = {
  quizData: null,
  rightAnswers: 0,
  currentQuestion: 0,
  categorySelected: false
};

export const updateState = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUIZ_QUESTIONS:
      return {
        ...state,
        quizData:action.quizData
      }
    case INCREMENT_RIGHT_ANSWERS:
      return {
             ...state,
             rightAnswers: state.rightAnswers + 1
            }
    case  UPDATE_CURRENT_QUESTION:
      return {
              ...state,
              currentQuestion: state.currentQuestion + 1
            }
    case MARK_CATEGORY_SELECTED:
      return {
              ...state,
              categorySelected: true
           }
    case RESET_GAME:
      return Object.assign({}, initialState);
    default:
      return state;
  }
};