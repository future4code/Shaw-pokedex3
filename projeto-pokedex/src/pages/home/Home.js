import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../routers/Cordinator";
import CardPokemon from "../../components/CardPokemon";
import { GlobalContext } from "../../global/GlobalContext";
import axios from "axios";
import { baseUrl } from "../../constants/constants";
<<<<<<< HEAD
import CardPokemon from "../../components/CardPokemon";
// import GlobalState from "../../global/GlobalState";


const Home = (props) => {
    const navigate = useNavigate()
<<<<<<< HEAD
=======

const Home = () => {
    const navigate = useNavigate()
    const test = useContext(GlobalContext)

    const pokeList = test.states.pokeList
    const setPokeList = test.setters.setPokeList
    const pokedexList = test.states.pokedexList

>>>>>>> ce9d68fece3bf0877e90e0a7c1cf8fca9d79676f
=======
    // const {states, setters} = useContext(GlobalState)
    // const pokeList = states.pokeList
    // const setPokeList = setters.setPokeLIst
>>>>>>> parent of 078367d (backup com todas funcionalidades)

    const getPokemons = () => {
        axios.get(`${baseUrl}pokemon`)
            .then((res) => {
<<<<<<< HEAD
<<<<<<< HEAD
                props.setPokeList(res.data.results)
=======
                setPokeList(res.data.results)
>>>>>>> ce9d68fece3bf0877e90e0a7c1cf8fca9d79676f
=======
                props.setPokeLIst(res.data.results)
>>>>>>> parent of 078367d (backup com todas funcionalidades)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    
    const cardPokemons = pokeList.map((pokemon) => {

        return (
<<<<<<< HEAD
            <CardPokemon key={pokemon.name}
                pokeList={props.pokeList}
<<<<<<< HEAD
                setPokeList={props.setPokeList}
=======
            <CardPokemon
                key={pokemon.name}
>>>>>>> ce9d68fece3bf0877e90e0a7c1cf8fca9d79676f
=======
                setPokeLIst={props.setPokeLIst}
>>>>>>> parent of 078367d (backup com todas funcionalidades)
                pokemon={pokemon}
            />
        )
    })


    useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
        if (!props.pokedexList.length) {
=======
parte-sergio
        if (!pokedexList.length) {
>>>>>>> ce9d68fece3bf0877e90e0a7c1cf8fca9d79676f
=======
        if(!props.pokedexList.length){
>>>>>>> parent of 078367d (backup com todas funcionalidades)
            getPokemons();
        }
    }, [pokedexList])


    return (
        <div>
            <h2>Home Page</h2>
            {cardPokemons}
            <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
        </div>
    )
}

export default Home;