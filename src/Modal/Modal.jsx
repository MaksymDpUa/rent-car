import { Backdrop, CloseBtn, Container, CloseIcon } from './Modal.styled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import sprite from 'asset/images/sprite.svg';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleCloseByEsc = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleCloseByEsc);

    return () => {
      window.removeEventListener('keydown', handleCloseByEsc);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <Container id="modal-container">
        <CloseBtn onClick={onClose}>
          <CloseIcon>
            <use xlinkHref={`${sprite}#icon-close`}></use>
          </CloseIcon>
        </CloseBtn>
        {children}
      </Container>
    </Backdrop>
    // modalRoot
  );
};

export default Modal;
