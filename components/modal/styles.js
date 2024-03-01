import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  min-height: 300px;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  font-size: 20px;
`;

export const Btn = styled.button`
  position: absolute;
  right: -30px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: #fff;
  background: #555;
  border: none;
  border-radius: 3px;

  &:hover {
    background: #777;
  }
`;
