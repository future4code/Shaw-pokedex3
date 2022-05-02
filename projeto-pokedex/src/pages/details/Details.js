import React from "react";
import { goToHome } from "../../routers/Cordinator";
import { useNavigate } from "react-router-dom";

const Details = () =>{
    const navigate = useNavigate()

    return (
        <div>
            <h2>Details Page</h2>
            <button onClick={() => goToHome(navigate)}>Voltar</button>
        </div>
    )
}

export default Details;