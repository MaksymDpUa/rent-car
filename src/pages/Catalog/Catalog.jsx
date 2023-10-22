// import axios from "axios";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { AdvertList } from "../../components/AdvertList/AdvertList";
import { LoadMoreBtn } from "../../components/LoadMoreBtn/LoadMoreBtn";
import { SideBar } from "../../components/SideBar/SideBar";
// import { getAdverts } from "../../helpers/api/fetchAdverts";
import { useFetchAdverts } from "../../hooks/useFetchAdverts";
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
  //   const [ids, setIds] = useLocalStorage("ids", []);
  const { adverts: catalog, noMoreAdverts } = useFetchAdverts(page, query);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleChangeQuery = (params) => {
    setQuery((prevParams) => ({ ...query, ...params }));
  };

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
    <>
      <h1>Catalog</h1>
      <SideBar handleChangeQuery={handleChangeQuery} />
      <AdvertList catalog={catalog} />
      {!noMoreAdverts && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
    </>
  );
};
export default Catalog;
