import randomColor from 'randomcolor';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
  margin: 10px;
  width: 570px;
  background: #222;
  color: #fff;
  border-radius: 8px;
  margin: 0 auto;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(19, 25px);
  grid-template-rows: repeat(19, 25px);
  justify-content: center;
  margin: 0 0 20px 0;
`;

export const Cell = styled.button`
  border: 1px solid #aaa;
  display: grid;
  justify-content: center;
  align-items: center;
  // background: none;
  background: ${(props) => (props.$isWinner ? 'rgba(255,52,44,0.5)' : 'none')};
  
  cursor: pointer;

  &.cell--win {
    background: #565656;
  }
`;

export const Span = styled.span`
  display: flex;
  padding-bottom: 7px;
`;

export const Icon = styled.div`
  border-radius: 50%;
  background-color: #fff;
  width: 35px;
  height: 35px;
  color: #333;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const GameInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`;

export const Timer = styled.div`
  color: ${(props) => (props.$isTimerRunning ? (props.$isDanger ? 'red' : '#fff') : 'gray')};
`;
