// import { SideBar } from "../SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import Catalog from "../../pages/Catalog/Catalog";
import Favorites from "../../pages/Favorites/Favorites";
import HomePage from "../../pages/HomePage/HomePage";
import { ContainerWrapper } from "./App.styled";

const App = () => {
  return (
    <ContainerWrapper>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      {/* <SideBar />
      <p>Hello</p> */}
    </ContainerWrapper>
  );
};

export default App;
