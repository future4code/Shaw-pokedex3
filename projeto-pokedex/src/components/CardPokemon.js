import axios from "axios";
import { baseUrl } from "../constants/constants";
import { useEffect, useState } from "react";
import { goToDatils } from "../routers/Cordinator";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../global/GlobalContext";
import React, { useContext } from "react";


const CardPokemon = (props) => {
  const navigate = useNavigate()
  const test = useContext(GlobalContext)

  const infosPoke = test.states.infosPoke
  const pokeList = test.states.pokeList
  const pokedexList = test.states.pokedexList
  const setInfoPokes = test.setters.setInfoPokes
  const setPokeList = test.setters.setPokeList
  const setPokedexList = test.setters.setPokedexList

  const getPokeInfos = () => {
    axios
      .get(`${baseUrl}pokemon/${props.pokemon.name}`)
      .then((res) => {
        setInfoPokes(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const setPokedex = () => {
    const newPokedex = [...pokedexList, infosPoke]
    setPokedexList(newPokedex);

    const newPokeList = pokeList.filter((item) => {
      return item.name != infosPoke.name
    })
<<<<<<< HEAD
<<<<<<< HEAD
    props.setPokeList(newPokeList)
=======
    setPokeList(newPokeList)
>>>>>>> ce9d68fece3bf0877e90e0a7c1cf8fca9d79676f
=======
    props.setPokeLIst(newPokeList)
>>>>>>> parent of 078367d (backup com todas funcionalidades)
  }

  useEffect(() => {
    getPokeInfos();
  }, []);

  return (
    <div>
      <div>
        <img
          src={infosPoke.sprites?.front_default}
          alt={`${props.pokemon.name}`}
        />
      </div>
      <div>
        <button onClick={() => setPokedex()}>Adicionar a Pokedex</button>
        {/* <button onClick={() => deletePokemon()}>remover a Pokedex</button> */}
        <button onClick={() => goToDatils(navigate, infosPoke.id)}>Ver Detalhes</button>
      </div>
    </div>
  );
};

export default CardPokemon;
