// import { LogoutBtn } from './LogoutBtn.jsx/LogoutBtn';
import { CloseBtn } from 'CloseBtn/CloseBtn';
import { SideBarNav } from 'components/SideBarNav/SideBarNav';
import { SideBarEl } from './SideBar.styled';
// import { TitleBox } from './TitleBox/TitleBox';
// import { UserNavigation } from './UserNav/UserNav';
// import { useMediaQuery } from 'react-responsive';

export const SideBar = ({ removeSideBar, showSideBar }) => {
  //   const desktop = useMediaQuery({ minWidth: 1440 });
  if (showSideBar) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
    }
    



    

  return (
    <SideBarEl showSideBar={showSideBar}>
      <CloseBtn removeSideBar={removeSideBar} />
      <SideBarNav />
      {/* <TitleBox removeSideBar={removeSideBar} />
      <UserNavigation removeSideBar={removeSideBar} />
      <LogoutBtn /> */}
    </SideBarEl>
  );
};
