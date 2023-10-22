import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  list-style: none;
  display: inline-flex;
  flex-direction: column;
  gap: 24px;
`;

export const NavListItem = styled.li``;

export const NavListLink = styled(NavLink)`
  text-decoration: none;
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px; /* 111.111% */
`;
