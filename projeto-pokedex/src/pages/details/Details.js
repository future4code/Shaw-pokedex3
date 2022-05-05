<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useContext, useState, useEffect } from "react";
>>>>>>> ce9d68fece3bf0877e90e0a7c1cf8fca9d79676f
import { goToHome } from "../../routers/Cordinator";
import { useNavigate, useParams } from "react-router-dom";
//--- implementando global 
import { GlobalContext } from "../../global/GlobalContext";
import axios from "axios";
import { baseUrl } from "../../constants/constants";

<<<<<<< HEAD
const Details = () => {
    const navigate = useNavigate()
=======

const Details = () => {
>>>>>>> ce9d68fece3bf0877e90e0a7c1cf8fca9d79676f
    const params = useParams()
    const test = useContext(GlobalContext)

<<<<<<< HEAD
    useEffect(() => {
        getPokeDetails()
    }, [])
=======
    const navigate = useNavigate()
    const details = test.states.details
    const setDetails = test.setters.setDetails
>>>>>>> ce9d68fece3bf0877e90e0a7c1cf8fca9d79676f

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