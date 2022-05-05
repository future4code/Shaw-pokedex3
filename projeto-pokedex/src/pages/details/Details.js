import React, { useContext, useState, useEffect } from "react";
import { goToHome } from "../../routers/Cordinator";
import { useNavigate, useParams } from "react-router-dom";
//--- implementando global 
import { GlobalContext } from "../../global/GlobalContext";
import axios from "axios";
import { baseUrl } from "../../constants/constants";


const Details = () => {
    const params = useParams()
    const test = useContext(GlobalContext)

    const navigate = useNavigate()
    const details = test.states.details
    const setDetails = test.setters.setDetails

    const getPokeDetails = () => {
        axios.get(`${baseUrl}pokemon/${params.id}`)
            .then((res) => {
                setDetails(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    useEffect(() => {
        getPokeDetails()
    }, [])

    return (
        <div>
            <h2>Detalhes do Pokemon</h2>
            <h3>{details.name}</h3>
            <button onClick={() => goToHome(navigate)}>Voltar</button>
        </div>
    )
}

export default Details;