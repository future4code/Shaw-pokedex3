import axios from "axios";
import { baseUrl } from "../constants/constants";
import { useEffect, useState } from "react";
import { goToDatils } from "../routers/Cordinator";
import { useNavigate } from "react-router-dom";

const CardPokemon = (props) => {
  const [infosPoke, setInfoPokes] = useState({});
  const navigate = useNavigate()

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
    const newPokedex = [...props.pokedexList, infosPoke]
    props.setPokedexList(newPokedex);

    const newPokeList = props.pokeList.filter((item) => {
      return item.name != infosPoke.name
    })
    props.setPokeLIst(newPokeList)
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
