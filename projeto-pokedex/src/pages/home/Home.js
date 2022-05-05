import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../routers/Cordinator";
import CardPokemon from "../../components/CardPokemon";
import { GlobalContext } from "../../global/GlobalContext";
import axios from "axios";
import { baseUrl } from "../../constants/constants";


const Home = () => {
    const navigate = useNavigate()
    const test = useContext(GlobalContext)

    const pokeList = test.states.pokeList
    const setPokeList = test.setters.setPokeList
    const pokedexList = test.states.pokedexList

    const getPokemons = () => {
        axios.get(`${baseUrl}pokemon`)
            .then((res) => {
                setPokeList(res.data.results)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const cardPokemons = pokeList.map((pokemon) => {
        return (
            <CardPokemon
                key={pokemon.name}
                pokemon={pokemon}
            />
        )
    })

    useEffect(() => {
        if (!pokedexList.length) {
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