import { BurgerBtn } from 'BurgerBtn/BurgerBtn';
import { ContainerWrapper } from 'components/App/App.styled';
import { SideBar } from 'components/SideBar/SideBar';
import { useCallback, useState } from 'react';

const Favorites = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const addSideBar = () => setShowSideBar(true);

  const removeSideBar = useCallback(() => {
    setShowSideBar(false);
  }, []);

  return (
    <ContainerWrapper>
      {!showSideBar && <BurgerBtn addSideBar={addSideBar} />}
      <SideBar showSideBar={showSideBar} removeSideBar={removeSideBar} />
      <h1>Hello</h1>
    </ContainerWrapper>
  );
};
export default Favorites;
