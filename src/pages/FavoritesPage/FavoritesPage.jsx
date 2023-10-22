import { BurgerBtn } from 'BurgerBtn/BurgerBtn';
import { Container } from 'components/Container/Container';
import { ContainerWrapper } from 'components/ContainerWrapper/ContainerWrapper';
// import { ContainerWrapper } from 'components/App/App.styled';
import { SideBar } from 'components/SideBar/SideBar';
import { useCallback, useState } from 'react';

const Favorites = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const addSideBar = () => setShowSideBar(true);

  const removeSideBar = useCallback(() => {
    setShowSideBar(false);
  }, []);

  return (
    <Container>
      {!showSideBar && <BurgerBtn addSideBar={addSideBar} />}
      <SideBar showSideBar={showSideBar} removeSideBar={removeSideBar} />
      <h1>Hello</h1>
    </Container>
  );
};
export default Favorites;
