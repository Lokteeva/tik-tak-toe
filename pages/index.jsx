import { useState } from 'react';
import * as Styled from './styles';
import { Button } from '../components/Button/Button';

const GAME_SYMBOLS = {
  ZERO: 'zero',
  CROSS: 'cross',
};

export default function HomePage() {
  const [cells, setCells] = useState(() => new Array(19 * 19).fill(null));

  return (
    <Styled.Wrapper>
      <Styled.Center >игра</Styled.Center>
      <Styled.Grid>
        {cells.map((_, index) => (
          <Styled.Cell key={index}></Styled.Cell>
        ))}
      </Styled.Grid>
      <Styled.Center>
        <Button>Новая игра</Button>
        <span> ........... </span>
        <Button>Сдаться</Button>
      </Styled.Center>
    </Styled.Wrapper>
  );
}
