// import { SideBar } from "../SideBar/SideBar";
import SharedLayout from 'components/SharedLayout/SharedLayot';
import { Route, Routes } from 'react-router-dom';
import CatalogPage from '../../pages/CatalogPage/CatalogPage';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import HomePage from '../../pages/HomePage/HomePage';
// import { ContainerWrapper } from './App.styled';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="catalog" element={<CatalogPage />}></Route>
        <Route path="favorites" element={<FavoritesPage />}></Route>
        <Route path="*" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
