import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../routers/Cordinator";
import axios from "axios";
import { baseUrl } from "../../constants/constants";
import CardPokemon from "../../components/CardPokemon";


const Home = () =>{
    const navigate = useNavigate()
    const [pokeList, setPokeLIst] = useState([])
    const [pokedexList, setPokedexList] = useState([])


    const getPokemons = () =>{
        axios.get(`${baseUrl}pokemon`)
        .then((res) =>{
            setPokeLIst(res.data.results)
        })
        .catch((err) =>{
            console.log(err.response)
        })
    }

    const cardPokemons = pokeList.map((pokemon) =>{
        return (
            <CardPokemon pokemon={pokemon} setPokedexList={setPokedexList} pokedexList={pokedexList}/>
        )      
    })
   

    useEffect(() => {
        getPokemons();
    },[])




    return (
        <div>
            <h2>Home Page</h2>
            {cardPokemons}
            <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
        </div>
    )
}

export default Home;