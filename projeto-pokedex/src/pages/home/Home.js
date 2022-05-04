import React, { useState, useEffect } from "react";
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
                props.setPokeLIst(res.data.results)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }


    // console.log(props.pokedexList)
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
        getPokemons();
    }, [])

    return (
        <div>
            <h2>Home Page</h2>
            {cardPokemons}
            <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
        </div>
    )
}

export default Home;