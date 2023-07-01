import React from 'react';
import GameBoard from '../components/Board';

const GamePage = () => {
  return (
    <div className="game">
      <h1>Warcaby</h1>
      <Board board={[]} handleClick={() => {}} />
    </div>
  );
};

export default GamePage;
