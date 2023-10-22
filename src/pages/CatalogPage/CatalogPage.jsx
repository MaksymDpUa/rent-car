import { useCallback, useEffect, useState } from 'react';
import { AdvertList } from '../../components/AdvertList/AdvertList';
import { LoadMoreBtn } from '../../components/LoadMoreBtn/LoadMoreBtn';
import { Filters } from '../../components/Filters/Filters';
import { useFetchAdverts } from '../../hooks/useFetchAdverts';
import { BurgerBtn } from 'BurgerBtn/BurgerBtn';
import { SideBar } from 'components/SideBar/SideBar';
import Section from 'components/Section/Section';
import { Container } from 'components/Container/Container';

const Catalog = () => {
  const [query, setQuery] = useState({});
  const [page, setPage] = useState(1);
  const [showSideBar, setShowSideBar] = useState(false);

  const addSideBar = () => setShowSideBar(true);

  const removeSideBar = useCallback(() => {
    setShowSideBar(false);
  }, []);

  const { adverts: catalog, noMoreAdverts } = useFetchAdverts(page, query);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleChangeQuery = params => {
    setQuery(prevParams => ({ ...prevParams, ...params }));
  };

  const handleBackdropClick = event => {
    console.log(event.target);
    console.log(event.currentTarget);
    if (event.target === event.currentTarget) {
      removeSideBar();
    }
  };

  useEffect(() => {
    const handleEscKeyPress = event => {
      if (showSideBar && event.key === 'Escape') {
        removeSideBar();
      }
    };
    window.addEventListener('keydown', handleEscKeyPress);
    return () => {
      window.removeEventListener('keydown', handleEscKeyPress);
      document.body.style.overflow = 'auto';
    };
  }, [showSideBar, removeSideBar]);

  return (
    <Section onClick={handleBackdropClick}>
      <Container onClick={handleBackdropClick}>
        {!showSideBar && <BurgerBtn addSideBar={addSideBar} />}
        <SideBar showSideBar={showSideBar} removeSideBar={removeSideBar} />
        <Filters handleChangeQuery={handleChangeQuery} />
        <AdvertList catalog={catalog} />
        {!noMoreAdverts && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      </Container>
    </Section>
  );
};
export default Catalog;
