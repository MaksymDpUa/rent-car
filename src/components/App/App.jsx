import SharedLayout from 'components/SharedLayout/SharedLayot';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';


const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('../../pages/FavoritesPage/FavoritesPage')
);

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
