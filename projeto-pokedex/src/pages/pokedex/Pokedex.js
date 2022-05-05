<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom";
import { goToDetails, goBack } from "../../routers/Cordinator";
=======
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToDatils, goBack } from "../../routers/Cordinator";
import { GlobalContext } from "../../global/GlobalContext";

>>>>>>> ce9d68fece3bf0877e90e0a7c1cf8fca9d79676f

const Pokedex = (props) => {
    const navigate = useNavigate()
parte-sergio
    const test = useContext(GlobalContext)

    const pokedexList = test.states.pokedexList
    const pokeList = test.states.pokeList
    const setPokedexList = test.setters.setPokedexList
    const setPokeList = test.setters.setPokeList

    const deletePokemon = (pokemoName) => {
        const newPokedexList = pokedexList.filter((item) => {
            return item.name != pokemoName.name
        })
<<<<<<< HEAD
        props.setPokedexList(newPokedexList)
        const newPokeList = [...props.pokeList, pokemoName]
        props.setPokeList(newPokeList)        
    }

    const pokemons = props.pokedexList.map((pokemon) => {
=======
        setPokedexList(newPokedexList)
        const newPokeList = [...pokeList, pokemoName]
        setPokeList(newPokeList)

    }


    const pokemons = pokedexList.map((pokemon) => {
>>>>>>> ce9d68fece3bf0877e90e0a7c1cf8fca9d79676f

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
                    <button onClick={() => goToDetails(navigate, pokemon.id)}>Ver Detalhes</button>
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