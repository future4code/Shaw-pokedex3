import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../routers/Cordinator";
import CardPokemon from "../../components/CardPokemon";
import { GlobalContext } from "../../global/GlobalContext";
import axios from "axios";
import { baseUrl } from "../../constants/constants";
import CardPokemon from "../../components/CardPokemon";
import { Container, Cont, Button, Header } from "./stylesHome";
import logo from "../../assets/logoPokemon.png"


const Home = (props) => {
    const navigate = useNavigate()

const Home = () => {
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
    
    const cardPokemons = pokeList.map((pokemon) => {

        return (
            <CardPokemon
                key={pokemon.name}
                setPokeLIst={props.setPokeLIst}
                pokemon={pokemon}
            />
        )
    })


    useEffect(() => {
        if(!props.pokedexList.length){
            getPokemons();
        }
    }, [pokedexList])

    return (
        <Container>
            <Cont>
                <Header>
                    <img src={logo} alt="Slogan Pokemon, gotta catch'em all!"/>
                    <Button>Ir para Pokedex</Button>
                </Header>
                <h2>Pokemons Disponíveis</h2>
                {cardPokemons}
                <Button onClick={() => goToPokedex(navigate)}>Pokedex</Button>
            </Cont>
        </Container>
    )
}

export default Home;