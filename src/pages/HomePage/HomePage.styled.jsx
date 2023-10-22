import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  display: block;
  /* margin: 24px auto 16px auto; */
  text-align: center;
  color: #121417;
  font-family: Manrope;
`;

export const Slogan = styled.h2`
  display: block;
  margin: 0 auto 24px auto;
  text-align: center;
  color: #121417;
  font-family: Manrope;
`;

export const MainNNavLink = styled(NavLink)`
  display: block;
  margin: 0 auto;
  border-radius: 14px;
  display: flex;
  border-radius: 12px;
  background: #3470ff;
  width: 180px;
  height: 48px;
  padding: 14px 44px;
  border: none;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--white);
  cursor: pointer;
`;
