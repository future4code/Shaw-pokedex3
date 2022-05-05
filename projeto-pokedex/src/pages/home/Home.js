import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../routers/Cordinator";
import CardPokemon from "../../components/CardPokemon";
import { GlobalContext } from "../../global/GlobalContext";
import axios from "axios";
import { baseUrl } from "../../constants/constants";
<<<<<<< HEAD
import CardPokemon from "../../components/CardPokemon";

const Home = (props) => {
    const navigate = useNavigate()
=======

const Home = () => {
    const navigate = useNavigate()
    const test = useContext(GlobalContext)

    const pokeList = test.states.pokeList
    const setPokeList = test.setters.setPokeList
    const pokedexList = test.states.pokedexList

>>>>>>> ce9d68fece3bf0877e90e0a7c1cf8fca9d79676f

    const getPokemons = () => {
        axios.get(`${baseUrl}pokemon`)
            .then((res) => {
<<<<<<< HEAD
                props.setPokeList(res.data.results)
=======
                setPokeList(res.data.results)
>>>>>>> ce9d68fece3bf0877e90e0a7c1cf8fca9d79676f
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
                setPokeList={props.setPokeList}
=======
            <CardPokemon
                key={pokemon.name}
>>>>>>> ce9d68fece3bf0877e90e0a7c1cf8fca9d79676f
                pokemon={pokemon}
            />
        )
    })

    useEffect(() => {
<<<<<<< HEAD
        if (!props.pokedexList.length) {
=======
parte-sergio
        if (!pokedexList.length) {
>>>>>>> ce9d68fece3bf0877e90e0a7c1cf8fca9d79676f
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