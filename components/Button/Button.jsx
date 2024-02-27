import * as Styled from "./styles";

export function Button({ children, onClick, ml }) {
  return (
    <>
      <Styled.Btn onClick={onClick} ml={ml}>
        {children}
      </Styled.Btn>
    </>
  );
}
