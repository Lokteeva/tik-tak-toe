import { useState } from 'react';
import { GAME_SYMBOLS } from './constants';
import { computeWinner, getNextMove } from './model';


export default function useGameState(plyersCount) {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }));

  // console.log(computeWinner(cells))
  
  const winnerSequence = computeWinner(cells);

  const nextMove = getNextMove(currentMove, plyersCount);

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }

      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove, plyersCount),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentMove : cell,
        ),
      };
    });
  };

  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequence
  };
}
