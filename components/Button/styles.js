import styled from "styled-components";

export const Btn = styled.button((props) => {
  const { ml = 0 } = props;

  return `
    width: 100px;
    height: 30px !important;
    font-size: 12px;
    background: none;
    color: #fff;
    border: 1px solid whitesmoke;
    // margin-left: 10px;
    margin-left: ${ml}px;
    user-select: none;
  
    &:hover {
      background: whitesmoke;
      color: #222;
      cursor: pointer;
    }
  `;
});
