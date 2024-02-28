import * as Styled from '../pages/styles';
import { GemeSymbol } from '../components/GemeSymbol';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { players } from './constants';

export function GameInfo({ playersCount, currentMove }) {
  return (
    <Styled.Wrapper>
      <Styled.GameInfo>
        {players.slice(0, playersCount).map((player) => (
          <>
            <PlayerInfo
              key={player.id}
              playerInfo={player}
              isTimerRunning={currentMove === player.symbol}
            />
          </>
        ))}
      </Styled.GameInfo>
    </Styled.Wrapper>
  );
}

function PlayerInfo({ playerInfo, isTimerRunning }) {
  const [seconds, setSeconds] = useState(6);

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secondsString = String(seconds % 60).padStart(2, '0');

  const isDanger = seconds <= 10;

  useEffect(() => {
    if (isTimerRunning) {
      setInterval(() => {
        setSeconds((s) => Math.max(s - 1, 0));
      }, 1000);
    }
  }, [isTimerRunning]);

  return (
    <div>
      <Profile name={playerInfo.name} rating={playerInfo.rating} avatar={playerInfo.avatar} />
      <Styled.Icon>
        <GemeSymbol symbol={playerInfo.symbol} />
      </Styled.Icon>
      {/* переделать условное отображение */}
      {!isDanger && (
        <Styled.Timer>
          {minutesString}:{secondsString}
        </Styled.Timer>
      )}
      {isDanger && (
        <Styled.Timer isDanger>
          {minutesString}:{secondsString}
        </Styled.Timer>
      )}
    </div>
  );
}

function Profile({ name, rating, avatar }) {
  return (
    <>
      <Image src={avatar} alt="foto" />
      <Styled.Span>{name}</Styled.Span>
      <Styled.Span>Rating: {rating}</Styled.Span>
    </>
  );
}