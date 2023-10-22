import { CloseBtn } from 'CloseBtn/CloseBtn';
import { SideBarNav } from 'components/SideBarNav/SideBarNav';
import { SideBarEl } from './SideBar.styled';

export const SideBar = ({ removeSideBar, showSideBar }) => {

  if (showSideBar) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
    }
       

  return (
    <SideBarEl showSideBar={showSideBar}>
      <CloseBtn removeSideBar={removeSideBar} />
      <SideBarNav />
    </SideBarEl>
  );
};
