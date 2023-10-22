// import axios from "axios";
// import { ContainerWrapper } from 'components/App/App.styled';
import { useCallback, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";
import { AdvertList } from '../../components/AdvertList/AdvertList';
import { LoadMoreBtn } from '../../components/LoadMoreBtn/LoadMoreBtn';
import { Filters } from '../../components/Filters/Filters';
// import { getAdverts } from "../../helpers/api/fetchAdverts";
import { useFetchAdverts } from '../../hooks/useFetchAdverts';
import { BurgerBtn } from 'BurgerBtn/BurgerBtn';
import { SideBar } from 'components/SideBar/SideBar';
import Section from 'components/Section/Section';
// import { ContainerWrapper } from 'components/ContainerWrapper/ContainerWrapper';
import { Container } from 'components/Container/Container';
// import { fetchAdverts } from "../../redux/adverts/advertsOperations";
// import { selectAdverts } from "../../redux/adverts/advertsSelectors";

// const volvo = async () => {
//   return await axios.get("/adverts?filter=volvo");
// };

const Catalog = () => {
  //   const [adverts, setAdverts] = useState([]);
  //   const [searchValue, setSearchValue] = useState(null);
  const [query, setQuery] = useState({});
  const [page, setPage] = useState(1);

  const [showSideBar, setShowSideBar] = useState(false);

  const addSideBar = () => setShowSideBar(true);

  const removeSideBar = useCallback(() => {
    setShowSideBar(false);
  }, []);
  //   const [ids, setIds] = useLocalStorage("ids", []);
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

  //   useEffect(() => {
  //     const catalog = getAdverts();
  //     setAdverts(catalog);
  //   }, [catalog]);
  //   const [aaa, setAAA] = useState("");
  //   const [sss, setSss] = useState([]);
  //   const dispatch = useDispatch();
  //   const es = getAdverts();
  //   console.log(es);
  //   const [adv, setAdv] = useState([]);
  //   useEffect(async () => {
  //     const es = getAdverts();
  // console.log(es);
  // setSss({ es });
  // console.log(sss);
  // dispatch(fetchAdverts());
  //   }, []);
  //   const adva = fetchAdverts();
  //   console.log(adva);
  //   const catalog = useSelector(selectAdverts);

  //   console.log(adv);

  return (
    <Section onClick={handleBackdropClick}>
      {/* <ContainerWrapper onClick={handleBackdropClick}> */}
      <Container onClick={handleBackdropClick}>
        {!showSideBar && <BurgerBtn addSideBar={addSideBar} />}
        <SideBar showSideBar={showSideBar} removeSideBar={removeSideBar} />
        <Filters handleChangeQuery={handleChangeQuery} />
        <AdvertList catalog={catalog} />
        {!noMoreAdverts && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
        {/* </ContainerWrapper> */}
      </Container>
    </Section>
  );
};
export default Catalog;
