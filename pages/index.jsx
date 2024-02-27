import { useState } from 'react';
import * as Styled from './styles';
import { Button } from '../components/Button/Button';
import { GAME_SYMBOLS } from '../components/constants';
import { GemeSymbol } from '../components/gemeSymbol';

const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];

function getNextMove(currentMove) {
  const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
  return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
}

export default function GameField() {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }));
  const nextMove = getNextMove(currentMove);

  const handleCellClick = (index) => {
    setGameState((lastGameState) => ({
      ...lastGameState,
      currentMove: getNextMove(lastGameState.currentMove),
      cells: lastGameState.cells.map((cell, i) =>
        i === index ? getNextMove(lastGameState.currentMove) : cell,
      ),
    }));
  };

  return (
    <>
      <Styled.Wrapper>
        <Styled.Span>
          Ход: <GemeSymbol symbol={currentMove} />{' '}
        </Styled.Span>
        <div>
          Следующий: <GemeSymbol symbol={nextMove} />
        </div>
      </Styled.Wrapper>

      <Styled.Wrapper>
        <Styled.Grid>
          {cells.map((symbol, index) => (
            <Styled.Cell
              key={index}
              onClick={() => {
                handleCellClick(index);
              }}>
              {symbol && <GemeSymbol symbol={symbol} />}
            </Styled.Cell>
          ))}
        </Styled.Grid>
        <Styled.Center>
          <Button>Новая игра</Button>
          <span> ........... </span>
          <Button>Сдаться</Button>
        </Styled.Center>
      </Styled.Wrapper>
    </>
  );
}
