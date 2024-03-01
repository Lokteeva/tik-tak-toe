import { createPortal } from 'react-dom';
import * as Styled from './styles';

/**
 * 
 * @param {{
 * isOpen: boolean
 * onClose: Function
 * }} props 
 * @returns 
 */

export function Modal({children, isOpen= false, onClose}) {
  if (!isOpen) {
    return null;
  }

  const handleClick = (e) => {
    const inModal = (e.target.closest("[data-id=modal")) 
    if (inModal) return;
    onClose();
  }

  const modal = (
    <Styled.Wrapper onClick={handleClick}>
      <Styled.Modal data-id="modal">
        {children}
        <Styled.Btn onClick={onClose}>X</Styled.Btn>
      </Styled.Modal>
    </Styled.Wrapper>
  )

  return createPortal(modal, document.getElementById("modals"));
}

