import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToDatils, goBack } from "../../routers/Cordinator";
import { GlobalContext } from "../../global/GlobalContext";


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
        setPokedexList(newPokedexList)
        const newPokeList = [...pokeList, pokemoName]
        setPokeList(newPokeList)

    }


    const pokemons = pokedexList.map((pokemon) => {

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