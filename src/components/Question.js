import React,{ Component } from 'react';
import Timer from './Timer';

export default class Card extends Component {
  render() {
    const {
      difficulty,
      question,
      duration,
      wrongAnswers,
      correctAnswer,
      checkAnswerFn
    } = this.props;
    const answers = [correctAnswer].concat(wrongAnswers).sort();
    return (
      <article className="card">
        <header>
          <span>{difficulty} | </span>
          <Timer duration={duration} timeoutFn={checkAnswerFn(true, false)} />
        </header>
        <div>
          <p>{question}</p>
        </div>
        <footer>
          {answers.map((answer, i) => {
            return (
              <button key={i} onClick={checkAnswerFn(answer, correctAnswer)}>
                {answer}
              </button>
            );
          })}
        </footer>
      </article>
    );
  }
}