import { BurgerBtn } from 'BurgerBtn/BurgerBtn';
import { AdvertList } from 'components/AdvertList/AdvertList';
import { Container } from 'components/Container/Container';
import { SideBar } from 'components/SideBar/SideBar';
import { fetchAdverts } from 'helpers/api/fetchAdverts';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useCallback, useEffect, useState } from 'react';

const Favorites = () => {
  const [favoriteAdverts, setFavoriteAdverts] = useState([]);
  const [ids] = useLocalStorage('ids', []);
  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => {
    const responseResolved = fetchedData => {
      const newFavoriteAdverts = fetchedData.map(({ value }) => value[0]);
      setFavoriteAdverts(prevValue => {
        return [...newFavoriteAdverts];
      });
    };

    const responseRejected = error => {
      console.log(error);
    };

    const getFavoriteAdverts = ids => {
      const requests = ids.map(id => fetchAdverts({ id }));
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
