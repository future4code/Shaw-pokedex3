import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home"
import Pokedex from "../pages/pokedex/Pokedex";
import Details from "../pages/details/Details";
import React, { useState } from "react";

const Router = () => {

  const [pokedexList, setPokedexList] = useState([])
  const [pokeList, setPokeLIst] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home pokeList={pokeList} setPokeLIst={setPokeLIst} pokedexList={pokedexList} setPokedexList={setPokedexList} />} />
        <Route path="/pokedex" element={<Pokedex pokeList={pokeList} setPokeLIst={setPokeLIst} pokedexList={pokedexList} setPokedexList={setPokedexList} />} />
        <Route path="/pokemon/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;