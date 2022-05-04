import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToDatils, goBack } from "../../routers/Cordinator";


const Pokedex = (props) => {
    const navigate = useNavigate()

    const deletePokemon = (pokemoName) => {
        const newPokedexList = props.pokedexList.filter((item) => {
            return item.name != pokemoName.name
        })
        props.setPokedexList(newPokedexList)
        const newPokeList = [...props.pokeList, pokemoName]
        props.setPokeLIst(newPokeList)        
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
                    <button onClick={() => deletePokemon(pokemon)}>remover a Pokedex</button>
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