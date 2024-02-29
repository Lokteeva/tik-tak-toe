import * as Styled from '../pages/styles';
import { GemeSymbol } from '../components/GemeSymbol';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { players } from './constants';

export function GameInfo({ playersCount, currentMove, isDisabled, onPlayerTimeOver }) {
  return (
    <Styled.Wrapper>
      <Styled.GameInfo>
        {players.slice(0, playersCount).map((player) => (
          <PlayerInfo
            key={player.id}
            playerInfo={player}
            onTimeOver={()=> onPlayerTimeOver(player.symbol)}
            isTimerRunning={currentMove === player.symbol && !isDisabled }
          />
        ))}
      </Styled.GameInfo>
    </Styled.Wrapper>
  );
}

function PlayerInfo({ playerInfo, isTimerRunning, onTimeOver }) {
  const [seconds, setSeconds] = useState(6);

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondsString = String(seconds % 60).padStart(2, '0');

  const isDanger = seconds <= 10;

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((s) => Math.max(s - 1, 0));
      }, 1000);
      return () => {
        clearInterval(interval);
        setSeconds(6);
      };
    }
  }, [isTimerRunning]);

  useEffect(() => {
    if (seconds === 0) {
      onTimeOver()
    }
    // комент для того, чтобы eslint проигнорировал ошибку
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds])

  return (
    <div>
      <Profile name={playerInfo.name} rating={playerInfo.rating} avatar={playerInfo.avatar} />
      <Styled.Icon>
        <GemeSymbol symbol={playerInfo.symbol} />
      </Styled.Icon>

      <Styled.Timer $isTimerRunning={isTimerRunning} $isDanger={isDanger}>
        {minutesString}:{secondsString}
      </Styled.Timer>
    </div>
  );
}

function Profile({ name, rating, avatar }) {
  return (
    <>
      <Image src={avatar} alt="foto" priority />
      <Styled.Span>{name}</Styled.Span>
      <Styled.Span>Rating: {rating}</Styled.Span>
    </>
  );
}
