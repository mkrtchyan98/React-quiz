import App from '../App';
import { connect } from 'react-redux';
import {
  getAPIQuestions,
  markCategorySelected,
  resetGame,
  incrementRightAnswers,
  updateCurrentQuestion,
} from '../store/ActionCreators';

const mapStateToProps = state => {
  return {
    quizData: state.quizData,
    categorySelected: state.categorySelected,
    currentQuestion: state.currentQuestion,
    rightAnswers: state.rightAnswers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAPIQuestions: (quizData) => dispatch(getAPIQuestions(quizData)),
        markCategorySelected: () => dispatch(markCategorySelected()),
    resetGame: () => dispatch(resetGame()),
    incrementRightAnswers: () => dispatch(incrementRightAnswers()),
    updateCurrentQuestion: (currentQuestion) =>
      dispatch(updateCurrentQuestion(currentQuestion))
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;