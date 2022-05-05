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

}