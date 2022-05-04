import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToDatils, goBack } from "../../routers/Cordinator";


const Pokedex = (props) => {
    const navigate = useNavigate()
    console.log(props.pokedexList)

    const deletePokemon = (pokemoName) => {
        const newPokedexList = props.pokedexList.filter((item) => {
            return item.name != pokemoName
        })
        props.setPokedexList(newPokedexList)
    }


    const pokemons = props.pokedexList.map((pokemon) => {

        return (
            <div>
                <div>
                    <img
                        src={pokemon.sprites?.front_default}
                        alt={`${pokemon.name}`}
                    />
                </div>
                <div>
                    <button onClick={() => deletePokemon(pokemon.name)}>remover a Pokedex</button>
                    <button onClick={() => goToDatils(navigate, pokemon.id)}>Ver Detalhes</button>
                </div>
            </div>
        )
    })
    return (
        <>
            {pokemons}
            <button onClick={() => goBack(navigate)}>Voltar</button>
        </>
    )
}

export default Pokedex;