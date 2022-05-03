import React, {useState, useEffect} from "react";
import { goToHome } from "../../routers/Cordinator";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../constants/constants";

const Details = () =>{
    const navigate = useNavigate()
    const params = useParams()
    const [details, setDetails] = useState({})

    useEffect(() =>{
        getPokeDetails()
    },[])

    const getPokeDetails = () =>{
        axios.get(`${baseUrl}pokemon/${params.id}`)
        .then((res) =>{
            setDetails(res.data)
        })
        .catch((err) =>{
            console.log(err.response)
        })
    }

    return (
        <div>
            <h2>Detalhes do Pokemon</h2>
            <h3>{details.name}</h3>
            <button onClick={() => goToHome(navigate)}>Voltar</button>
        </div>
    )
}

export default Details;