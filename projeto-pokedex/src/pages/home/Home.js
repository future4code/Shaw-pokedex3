import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../routers/Cordinator";
import axios from "axios";
import { baseUrl } from "../../constants/constants";
import CardPokemon from "../../components/CardPokemon";

const Home = (props) => {
    const navigate = useNavigate()

    const getPokemons = () => {
        axios.get(`${baseUrl}pokemon`)
            .then((res) => {
                props.setPokeList(res.data.results)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    const cardPokemons = props.pokeList.map((pokemon) => {
        return (
            <CardPokemon key={pokemon.name}
                pokeList={props.pokeList}
                setPokeList={props.setPokeList}
                pokemon={pokemon}
                setPokedexList={props.setPokedexList}
                pokedexList={props.pokedexList} />
        )
    })

    useEffect(() => {
        if (!props.pokedexList.length) {
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