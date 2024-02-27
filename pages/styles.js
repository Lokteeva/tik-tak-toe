import randomColor from "randomcolor";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  min-height: 100vh;
  max-width: 100%;
  background: #222;
  color: #fff;
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
  margin: 20px auto;
`;

export const Cell = styled.button`
  border: 1px solid #888;
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
  padding: 6px 20px;

  &.symbol--x {
    color: #80ff18;
  }

  &.symbol--o {
    color: #f7fa05;
  }

  &.symbol {
    font-size: 40px;
    line-height: 24px;
  }
`;
