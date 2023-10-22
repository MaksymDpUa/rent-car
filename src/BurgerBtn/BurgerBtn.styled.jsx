import styled from '@emotion/styled';
import { RxHamburgerMenu } from 'react-icons/rx';
export const BurgerBtnEl = styled.button`
  position: absolute;
  top: 24px;
  left: 24px;
  width: 20px;
  height: 20px;
  padding: 0px;
  border: none;
  cursor: pointer;
  background-color: inherit;
`;

export const RxHamburgerMenuEl = styled(RxHamburgerMenu)`
  &:hover {
    fill: var(--accent-hover);
  }
`;
