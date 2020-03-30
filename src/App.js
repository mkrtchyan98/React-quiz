import React,{ Component } from 'react';
import Question from './components/Question';
import Score from './components/Score';
import  './App.css';
import {Grid} from '@material-ui/core';


const quizzes = [
  { id: 17, title: 'Science and Nature' },
  { id: 26, title: 'Celebrities' },
  { id: 21, title: 'Sports' },
  { id: 27, title: 'Animals' },
  { id: 20, title: 'Mythology' },
  { id: 9, title: 'General Knowledge' }
];

export default class App extends Component {


  fetchCategory(categoryId) {
      const {  markCategorySelected } = this.props;
            this.props.getAPIQuestions(categoryId)
        .then(() => markCategorySelected());
    
  }

  restartGame = () =>{
    const { resetGame } = this.props;
    resetGame();
  }

  checkAnswer = (answer, correctAnswer) => {
    const {
      incrementRightAnswers,
      updateCurrentQuestion,
      currentQuestion
    } = this.props;
    return () => {
      if (answer === correctAnswer) {
        incrementRightAnswers();
      }
      updateCurrentQuestion(currentQuestion);
    };
  }


  showQuestion = (record, index) => {
    const { correct_answer, incorrect_answers, difficulty, question } = record;
    return (
      <Question
        key={index}
        checkAnswerFn={this.checkAnswer}
        question={atob(question)}
        duration={10}
        difficulty={atob(difficulty)}
        correctAnswer={atob(correct_answer)}
        wrongAnswers={incorrect_answers.map(x => atob(x))}
      />
    );
  };

  render() {
    const {
      quizData,
      categorySelected,
      rightAnswers,
      currentQuestion
    } = this.props;
    return (
      <div className="app">
      <div className="app-header">
        {!categorySelected && <h1>Pick a Category</h1>}
        <Grid 
         container
  direction="column"
  justify="center"
  alignItems="center"

        >
                       <Grid item xs={12} md={12}>

        {!categorySelected &&
          quizzes.map((item, i) => {
            return (
              <button
                key={i}
                onClick={() =>this.fetchCategory(item.id)}
                id={item.id}
              >
                {item.title}
              </button>
            );
          })}
                        </Grid>
                        </Grid>
        {quizData && currentQuestion < 10
          ? this.showQuestion(quizData[currentQuestion], currentQuestion)
          : ''}
        {quizData && currentQuestion === 10 ? (
          <Score score={rightAnswers} refresh={this.restartGame} />
        ) : (
          ''
        )}
        </div>
      </div>
    );
  }
}