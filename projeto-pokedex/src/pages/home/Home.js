import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../routers/Cordinator";


const Home = () =>{
    const navigate = useNavigate()


    return (
        <div>
            <h2>Home Page</h2>
            <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
        </div>
    )
}

export default Home;