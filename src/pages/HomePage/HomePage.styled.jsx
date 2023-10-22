import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  display: block;
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
  color: var(--invert-color);
  cursor: pointer;
`;

export const HomePageContainer = styled.div`
width: 100%;
height: 100vh;
background-image: URL(https://pixabay.com/get/g7d776464c803af2b2b27f3a1befdb901ccf63af22a3dfce9bad5fc8dfb7083cd8be8596cfa08ae910fd47bfe8d8c7aebd456e61460b824cc2e9714977f0fe9fd_1280.jpg);
background-repeat: no-repeat;
background-size: cover;
`;
