import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home"
import Pokedex from "../pages/pokedex/Pokedex";
import Details from "../pages/details/Details";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={ <Home/>}/>
        <Route path="/pokedex" element={ <Pokedex/>}/>
        <Route path="/pokemon/:id" element={ <Details/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;