import randomColor from 'randomcolor';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
  margin: 20px;
  width: 570px;
  background: #222;
  color: #fff;
  border-radius: 8px;
  // margin: 0 auto;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(19, 30px);
  grid-template-rows: repeat(19, 30px);
  justify-content: center;
  margin: 0 0  20px 0;
`;

export const Cell = styled.button`
  border: 1px solid #aaa;
  display: grid;
  justify-content: center;
  align-items: center;
  background: none;
  cursor: pointer;

  &.cell--win {
    background: #565656;
  }
`;

export const Span = styled.span`
  display: flex;
  padding-bottom: 20px;
`;
