import styled from '@emotion/styled';
const isShowSideBar = props => {
  if (props.showSideBar) return '0%';
  return '-200%';
};

export const SideBarEl = styled.aside`
  position: absolute;
  top: 0px;
  left: 0px;
  display: inline-flex;
  padding: 48px 24px;
  flex-direction: column;
  width: 200px;
  height: 100vh;
  background-color: rgba(247, 247, 251, 1);
  z-index: 5;
  position: absolute;
  transform: translateX(${isShowSideBar});
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
