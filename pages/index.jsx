import * as Styled from './styles';
import { Button } from '../components/Button/Button';
import { GemeSymbol } from '../components/GemeSymbol';
import useGameState from '../components/useGameState';
import { GameInfo } from '../components/GameInfo';
import { useState } from 'react';

export default function GameField() {
  const [playersCount] = useState(2);
  const { cells, currentMove, nextMove, handleCellClick } = useGameState(playersCount);


  return (
    <>
      <GameInfo playersCount={playersCount} currentMove={currentMove}/>
      <Styled.Wrapper>
        <Styled.Span>
          Ход: <GemeSymbol symbol={currentMove} />
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
