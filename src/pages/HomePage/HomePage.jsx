// import { HomePageContainer } from 'components/HomePageContainer/HomePageContainer';
import { HomePageContainer, MainNNavLink, Slogan, Title } from './HomePage.styled';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Title>Feel the freedom! </Title>
      <Slogan>Rent a car and hit the road!</Slogan>
      <MainNNavLink to="catalog">Get started</MainNNavLink>
    </HomePageContainer>
  );
};
export default HomePage;
