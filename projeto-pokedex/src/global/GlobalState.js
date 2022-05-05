import React, {useState} from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import { baseUrl } from "../constants/constants";

export default function  GlobalState  (props){
    const [pokedexList, setPokedexList] = useState([])
    const [pokeList, setPokeList] = useState([])
    const [infosPoke, setInfoPokes] = useState({});
    const [details, setDetails] = useState({})


    const getPokemons = () => {
        axios.get(`${baseUrl}pokemon`)
            .then((res) => {
                setPokeList(res.data.results)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }


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

    const getPokeDetails = () =>{
        axios.get(`${baseUrl}pokemon/${pokeList.id}`)
        .then((res) =>{
            setDetails(res.data)
        })
        .catch((err) =>{
            console.log(err.response)
        })
    }


    const states = { pokeList, pokedexList, infosPoke, details }
    const setters = {setPokeList, setPokedexList, setDetails, setInfoPokes}
    const requests = {getPokeInfos, getPokemons, getPokeDetails}

    const data = {states, setters, requests}

    return(
        <GlobalContext.Provider value={{data}}>
            {props.childrens}
        </GlobalContext.Provider>
    )
}