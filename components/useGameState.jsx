import { useState } from 'react';
import { GAME_SYMBOLS } from './constants';
import { computeWinner, getNextMove } from './model';


export default function useGameState(plyersCount) {
  const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
    playersTimeOver: [],
  }));

  // console.log(computeWinner(cells))
  
  const winnerSequence = computeWinner(cells);

  const nextMove = getNextMove(currentMove, plyersCount, playersTimeOver);

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }

      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove, lastGameState.plyersCount, playersTimeOver),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentMove : cell,
        ),
      };
    });
  };

  const handlePlayerTimeOver = (symbol) => {
    setGameState((lastGameState) => {
      return {
        ...lastGameState,
        playersTimeOver: [...lastGameState.playersTimeOver, symbol],
        currentMove: getNextMove(lastGameState.currentMove, lastGameState.plyersCount, playersTimeOver),
      }
    });
  }

  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequence,
    handlePlayerTimeOver
  };
}
