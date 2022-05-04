import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../routers/Cordinator";
import axios from "axios";
import { baseUrl } from "../../constants/constants";
import CardPokemon from "../../components/CardPokemon";
// import GlobalState from "../../global/GlobalState";


const Home = (props) => {
    const navigate = useNavigate()
    // const {states, setters} = useContext(GlobalState)
    // const pokeList = states.pokeList
    // const setPokeList = setters.setPokeLIst

    const getPokemons = () => {
        axios.get(`${baseUrl}pokemon`)
            .then((res) => {
                props.setPokeLIst(res.data.results)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const cardPokemons = props.pokeList.map((pokemon) => {
        return (
            <CardPokemon key={pokemon.name}
                pokeList={props.pokeList}
                setPokeLIst={props.setPokeLIst}
                pokemon={pokemon}
                setPokedexList={props.setPokedexList}
                pokedexList={props.pokedexList} />
        )
    })


    useEffect(() => {
        if(!props.pokedexList.length){
            getPokemons();
        }
    }, [props.pokedexList])

    return (
        <div>
            <h2>Home Page</h2>
            {cardPokemons}
            <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
        </div>
    )
}

export default Home;