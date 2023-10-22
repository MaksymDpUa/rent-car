import { BurgerBtn } from 'BurgerBtn/BurgerBtn';
import { AdvertList } from 'components/AdvertList/AdvertList';
import { Container } from 'components/Container/Container';
// import { ContainerWrapper } from 'components/ContainerWrapper/ContainerWrapper';
// // import { ContainerWrapper } from 'components/App/App.styled';
import { SideBar } from 'components/SideBar/SideBar';
import { fetchAdvertById } from 'helpers/api/fetchAdvertsById';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useCallback, useEffect, useState } from 'react';

const Favorites = () => {
  const [favoriteAdverts, setFavoriteAdverts] = useState([]);
  const [ids] = useLocalStorage('ids', []);
  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => {
    const responseResolved = fetchedData => {
      const newFavoriteAdverts = fetchedData
        .filter(({ value }) => value)
        .map(({ value }) => value);
      setFavoriteAdverts(prevValue => [...prevValue, ...newFavoriteAdverts]);
    };
    fetch(`https://652fcda36c756603295db0b7.mockapi.io/api/adverts/9586`)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));

    const responseRejected = error => {
      console.log(error);
    };

    const getFavoriteAdverts = ids => {
      const requests = ids.map(id => fetchAdvertById(id));
      return Promise.allSettled(requests);
    };

    getFavoriteAdverts(ids).then(responseResolved).catch(responseRejected);
  }, [ids]);

  const addSideBar = () => setShowSideBar(true);

  const removeSideBar = useCallback(() => {
    setShowSideBar(false);
  }, []);

  return (
    <Container>
      {!showSideBar && <BurgerBtn addSideBar={addSideBar} />}
      <SideBar showSideBar={showSideBar} removeSideBar={removeSideBar} />
      <AdvertList catalog={favoriteAdverts} />
    </Container>
  );
};
export default Favorites;
