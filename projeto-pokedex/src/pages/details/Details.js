<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useContext, useState, useEffect } from "react";
>>>>>>> ce9d68fece3bf0877e90e0a7c1cf8fca9d79676f
=======
import React, {useState, useEffect} from "react";
>>>>>>> parent of 078367d (backup com todas funcionalidades)
import { goToHome } from "../../routers/Cordinator";
import { useNavigate, useParams } from "react-router-dom";
//--- implementando global 
import { GlobalContext } from "../../global/GlobalContext";
import axios from "axios";
import { baseUrl } from "../../constants/constants";

<<<<<<< HEAD
<<<<<<< HEAD
const Details = () => {
=======
const Details = () =>{
>>>>>>> parent of 078367d (backup com todas funcionalidades)
    const navigate = useNavigate()
=======

<<<<<<< HEAD
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
=======
    useEffect(() =>{
        getPokeDetails()
    },[])
>>>>>>> parent of 078367d (backup com todas funcionalidades)

    const getPokeDetails = () =>{
        axios.get(`${baseUrl}pokemon/${params.id}`)
        .then((res) =>{
            setDetails(res.data)
        })
        .catch((err) =>{
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