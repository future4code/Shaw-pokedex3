import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../routers/Cordinator";
import axios from "axios";
import { baseUrl } from "../../constants/constants";
import CardPokemon from "../../components/CardPokemon";
import { Container, Cont, Button, Header } from "./stylesHome";
import logo from "../../assets/logoPokemon.png"


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
                setPokeLIst={props.setPokeList}
                pokemon={pokemon}
                setPokedexList={props.setPokedexList}
                pokedexList={props.pokedexList} />
        )
    })


    useEffect(() => {
        if(!props.pokedexList.length){
            getPokemons();
        }
    }, [])

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