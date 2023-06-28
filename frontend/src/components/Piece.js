import React from 'react';

// Komponent reprezentujący pionek
const Piece = ({ piece }) => {
  // Renderowanie pionka w kształcie konia (takie pinki chccemy mieć)
  if (piece && piece.isKnight) {
    return <div className="piece">🐴</div>;
  }

  // Renderowanie innych pionków
  return <div className="piece">{piece && piece.isKing ? '👑' : '○'}</div>;
};

export default Piece;
