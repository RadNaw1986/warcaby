import React from 'react';
import Piece from './Piece';

// Komponent reprezentujący pojedyncze pole na planszy
const Square = ({ piece, onClick }) => {
  return (
    <div className="square" onClick={onClick}>
      {piece && <Piece piece={piece} />}
    </div>
  );
};

export default Square;
