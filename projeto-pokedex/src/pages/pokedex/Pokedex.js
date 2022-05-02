import React from "react";
import { useNavigate } from "react-router-dom";
import { goToDatils } from "../../routers/Cordinator";


const Pokedex = () =>{
    const navigate = useNavigate()
    return (
        <div>
            <h3>Pokedex Page</h3>
            <button onClick={() => goToDatils(navigate)}>Detalhes</button>
        </div>
    )
}

export default Pokedex;