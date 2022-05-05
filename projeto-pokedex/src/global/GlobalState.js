<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
=======
parte-sergio
import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { baseUrl } from "../constants/constants";
import axios from "axios";
import { useParams } from "react-router-dom"
import useRequestData from "../hook/useRequestData";


export default function GlobalState(props) {
    const params = useParams()


    //-------- estados e setters --------//      
    const [details, setDetails] = useState({})
    const [pokedexList, setPokedexList] = useState([])
    const [pokeList, setPokeList] = useState([])
    const [infosPoke, setInfoPokes] = useState({})



    //-- hook para pegar pokemons --//

    // const pokemons = useRequestData(`${baseUrl}pokemon`)

    //----- requisições -----//





    //----- organização -----//
    const states = { details, pokedexList, pokeList, infosPoke, pokemons }
    const setters = { setDetails, setPokedexList, setPokeList, setInfoPokes }

    return (
        <GlobalContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalContext.Provider>
    )

=======
import React, {useState} from "react";
>>>>>>> ce9d68fece3bf0877e90e0a7c1cf8fca9d79676f
=======
import React, {useState} from "react";
>>>>>>> parent of 078367d (backup com todas funcionalidades)
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
master
}