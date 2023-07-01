import React, { useState } from 'react';
import axios from 'axios'; //wczesniej było: import axios from 'axios' i wywalało błąd

const BoardSize = 8; // Rozmiar planszy warcabowej (8x8)

const Board = () => {
  const [board, setBoard] = useState(createInitialBoard());
  const [activePlayer, setActivePlayer] = useState(1);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedCol, setSelectedCol] = useState(null);

  const handleSquareClick = (row, col) => {
    const piece = board[row][col];

    if (!piece) {
      const isValidMove = checkValidMove(row, col);

      if (isValidMove) {
        const updatedBoard = movePiece(row, col);
        setBoard(updatedBoard);
        setActivePlayer(activePlayer === 1 ? 2 : 1);

        // Sprawdzenie, czy istnieje możliwość wielokrotnego bicia
        const canContinueCapture = checkContinuedCapture(row, col);
        if (!canContinueCapture) {
          setSelectedRow(null);
          setSelectedCol(null);
        }
      }
    } else {
      setSelectedRow(row);
      setSelectedCol(col);
    }
  };

  const createInitialBoard = () => {
    const initialBoard = Array(BoardSize)
      .fill(null)
      .map(() => Array(BoardSize).fill(null));

    // Ustawienie początkowych pionków na planszy
    for (let row = 0; row < BoardSize; row++) {
      for (let col = 0; col < BoardSize; col++) {
        if ((row + col) % 2 === 1 && row < 3) {
          initialBoard[row][col] = { player: 1, isKing: false }; // Gracz 1
        } else if ((row + col) % 2 === 1 && row > 4) {
          initialBoard[row][col] = { player: 2, isKing: false }; // Gracz 2
        }
      }
    }

    return initialBoard;
  };

  const checkValidMove = (row, col) => {
    // Sprawdź poprawność ruchu dla wybranego pola
    const piece = board[row][col];

    // Sprawdzenie, czy pole jest puste
    if (piece) {
      return false;
    }

    // Sprawdzenie, czy ruch jest przekątny
    const selectedPiece = board[selectedRow][selectedCol];
    const rowDiff = Math.abs(row - selectedRow);
    const colDiff = Math.abs(col - selectedCol);

    if (rowDiff !== colDiff) {
      return false;
    }

    // Sprawdzenie, czy ruch jest dozwolony w zależności od stanu planszy
    const isKing = selectedPiece.isKing;
    const player = selectedPiece.player;

    // Sprawdzenie, czy ruch w przód jest dozwolony dla gracza 1 i 2
    if (!isKing && ((player === 1 && row < selectedRow) || (player === 2 && row > selectedRow))) {
      return false;
    }

    // Sprawdzenie, czy ruch w tył jest dozwolony dla damki
    if (isKing && rowDiff === 1 && colDiff === 1) {
      return true;
    }

    // Sprawdzenie, czy pole docelowe jest puste
    if (board[row][col]) {
      return false;
    }

    // Sprawdzenie, czy ruch jest o 1 pole
    if (rowDiff !== 1 || colDiff !== 1) {
      return false;
    }

    // Sprawdzenie, czy ruch jest o 2 pola przy bicie pionka przeciwnika
    const middleRow = (row + selectedRow) / 2;
    const middleCol = (col + selectedCol) / 2;
    const middlePiece = board[middleRow][middleCol];

    if (Math.abs(row - selectedRow) === 2 && Math.abs(col - selectedCol) === 2 && middlePiece && middlePiece.player !== player) {
      return true;
    }

    // Sprawdzenie, czy pole docelowe jest na planszy
    if (row < 0 || row >= BoardSize || col < 0 || col >= BoardSize) {
      return false;
    }

    return true; // Zwróć true, jeśli ruch jest poprawny
  };

  const movePiece = (row, col) => {
    // Przenieś pionek na docelowe pole
    const updatedBoard = [...board];
    const selectedPiece = updatedBoard[selectedRow][selectedCol];

    updatedBoard[row][col] = selectedPiece;
    updatedBoard[selectedRow][selectedCol] = null;

    // Sprawdzenie, czy pionek osiągnął przeciwną stronę planszy i promocja na damkę
    if (row === 0 && activePlayer === 1) {
      updatedBoard[row][col].isKing = true;
    } else if (row === BoardSize - 1 && activePlayer === 2) {
      updatedBoard[row][col].isKing = true;
    }

    // Sprawdzenie, czy istnieje możliwość bicia pionka przeciwnika
    const middleRow = (row + selectedRow) / 2;
    const middleCol = (col + selectedCol) / 2;

    if (Math.abs(row - selectedRow) === 2 && Math.abs(col - selectedCol) === 2) {
      updatedBoard[middleRow][middleCol] = null;

      // Sprawdzenie, czy pionek może kontynuować bicie
      const canContinueCapture = checkContinuedCapture(row, col);
      if (!canContinueCapture) {
        setSelectedRow(null);
        setSelectedCol(null);
      }
    }

    return updatedBoard;
  };

  const checkContinuedCapture = (row, col) => {
    const piece = board[row][col];

    // Sprawdzenie, czy pionek może kontynuować bicie
    const possibleMoves = [
      { row: row + 2, col: col + 2 },
      { row: row + 2, col: col - 2 },
      { row: row - 2, col: col + 2 },
      { row: row - 2, col: col - 2 },
    ];

    for (const move of possibleMoves) {
      if (checkValidMove(move.row, move.col)) {
        const middleRow = (move.row + row) / 2;
        const middleCol = (move.col + col) / 2;

        if (board[middleRow][middleCol] && board[middleRow][middleCol].player !== piece.player) {
          return true; // Istnieje możliwość kontynuacji bicia
        }
      }
    }

    return false; // Brak możliwości kontynuacji bicia
  };

  return (
    <div className="game">
      <h1>Warcaby</h1>
      <Board board={board} handleClick={handleSquareClick} />
    </div>
  );
};

export default Board;