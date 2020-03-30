import React from 'react';

const Score = ({ refresh, score }) => {
  return (
    <article className="scoreCard">
      <h1>Your Score</h1>
      <p>{score}</p>
      <button onClick={refresh}>Play Again</button>
    </article>
  )
}

export default Score;