import React, {useState} from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import { baseUrl } from "../constants/constants";

export default function  GlobalState  (props){
    const [pokedexList, setPokedexList] = useState([])
    const [pokeList, setPokeLIst] = useState([])
    const [infosPoke, setInfoPokes] = useState({});
    const [details, setDetails] = useState({})

    const getPokeInfos = () => {
        axios
          .get(`${baseUrl}pokemon/${pokeList.pokemon.name}`)
          .then((res) => {
            setInfoPokes(res.data);
          })
          .catch((err) => {
            console.log(err.response);
          });
      };

      const getPokemons = () => {
        axios.get(`${baseUrl}pokemon`)
            .then((res) => {
                props.setPokeLIst(res.data.results)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const getPokeDetails = () =>{
        axios.get(`${baseUrl}pokemon/${infosPoke.id}`)
        .then((res) =>{
            setDetails(res.data)
        })
        .catch((err) =>{
            console.log(err.response)
        })
    }


    const states = { pokeList, pokedexList, infosPoke, details }
    const setters = {setPokeLIst, setPokedexList, setDetails, setInfoPokes}
    const requests = {getPokeInfos, getPokemons, getPokeDetails}

    return(
        <GlobalContext.Provider value={{states, setters, requests}}>

        </GlobalContext.Provider>
    )
}