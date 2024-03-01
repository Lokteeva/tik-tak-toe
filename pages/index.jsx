import * as Styled from './styles';
import { Button } from '../components/Button/Button';
import { GemeSymbol } from '../components/GemeSymbol';
import useGameState from '../components/useGameState';
import { GameInfo } from '../components/GameInfo';
import { useState } from 'react';
import { Modal } from '../components/modal/modal';

export default function GameField() {
  const [playersCount] = useState(4);
  const {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequence,
    handlePlayerTimeOver,
    winnerSymbol,
  } = useGameState(playersCount);

  // console.log(winnerSequence + "победа")

  return (
    <>
      <Modal isOpen={winnerSymbol}>
        <div>Победитель: {winnerSymbol && <GemeSymbol symbol={winnerSymbol} />}</div>
      </Modal>

      <Styled.Wrapper>
        ........<Button>Играть</Button>........
      </Styled.Wrapper>

      <GameInfo
        playersCount={playersCount}
        currentMove={currentMove}
        isDisabled={!!winnerSymbol}
        onPlayerTimeOver={handlePlayerTimeOver}
      />

      <Styled.Wrapper>
        <Styled.Span>Ход: {!winnerSymbol && <GemeSymbol symbol={currentMove} />}</Styled.Span>
        <div>Следующий: {!winnerSymbol && <GemeSymbol symbol={nextMove} />}</div>
        <div>
          Победитель:
          {winnerSymbol && <GemeSymbol symbol={winnerSymbol} />}
        </div>
      </Styled.Wrapper>

      <Styled.Wrapper>
        <Styled.Grid>
          {cells.map((symbol, index) => {
            return (
              <Styled.Cell
                key={index}
                $isWinner={winnerSequence?.includes(index)}
                disabled={!!winnerSymbol}
                onClick={() => {
                  handleCellClick(index);
                }}>
                {symbol && <GemeSymbol symbol={symbol} />}
              </Styled.Cell>
            );
          })}
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
