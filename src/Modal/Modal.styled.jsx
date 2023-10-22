import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--condition-color);
`;

export const Container = styled.div`
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 541px;
  height: auto;
  padding: 40px;

  background-color: var(--bg-color);
  border-radius: 24px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;

  background-color: transparent;
  border: none;

  cursor: pointer;
  outline: none;

  & svg {
    stroke: var(--primary-color);
  }

  & svg:hover,
  & svg:focus {
    stroke: var(--accent-hover);
  }
`;

export const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;

  stroke: currentColor;
  transition: stroke var(--timing-function) var(--transition-duration);
`;
