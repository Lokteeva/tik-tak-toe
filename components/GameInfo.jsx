import * as Styled from '../pages/styles';
import { GemeSymbol } from '../components/GemeSymbol';
import Image from 'next/image';
import { useState } from 'react';
import { players } from './constants';

export function GameInfo() {
  const [playersCount] = useState(2);

  return (
    <Styled.Wrapper>
      <Styled.GameInfo>
      {players.slice(0, playersCount).map((player) => (
        <>
            <PlayerInfo key={player.id} playerInfo={player} />
        </>
      ))}
      </Styled.GameInfo>
    </Styled.Wrapper>
  );
}

function PlayerInfo({ playerInfo }) {
  const [seconds, setSeconds] = useState(60);

  const isDanger = seconds < 10;

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");

  return (
    <div>
      <Profile name={playerInfo.name} rating={playerInfo.rating} avatar={playerInfo.avatar} />
      <Styled.Icon>
        <GemeSymbol symbol={playerInfo.symbol} />
      </Styled.Icon>
      <div >{minutesString}:{secondsString}</div>
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
