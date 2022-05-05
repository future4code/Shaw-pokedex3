import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home"
import Pokedex from "../pages/pokedex/Pokedex";
import Details from "../pages/details/Details";
import React, { useState } from "react";

const Router = () => {

<<<<<<< HEAD
  const [pokedexList, setPokedexList] = useState([])
  const [pokeList, setPokeList] = useState([])

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home pokeList={pokeList} setPokeList={setPokeList} pokedexList={pokedexList} setPokedexList={setPokedexList} />} />
        <Route path="/pokedex" element={<Pokedex pokeList={pokeList} setPokeList={setPokeList} pokedexList={pokedexList} setPokedexList={setPokedexList} />} />
=======
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
>>>>>>> ce9d68fece3bf0877e90e0a7c1cf8fca9d79676f
        <Route path="/pokemon/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;