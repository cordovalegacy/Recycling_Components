import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import PokeTypes from "./PokeTypes"

const DisplayOne = () => {

    const { id } = useParams()
    console.log(id)
    const [onePokemon, setOnePokemon] = useState({
        name: "",
        nickname: "",
        type: "",
        image: ""
    })

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/pokemon/${id}`)
            .then((res) => {
                console.log("One Pokemon: ", res.data)
                setOnePokemon({
                    name: res.data.name,
                    nickname: res.data.nickname,
                    type: res.data.type,
                    image: res.data.image
                })
            })
            .catch((err) => {
                console.log("Something went wrong: ", err)
            })
    }, [])

    return (
        <div>
            <h2 className="space">Pokemon Details</h2>
            <div className="pokemon-card">
                <h4>Name: {onePokemon?.name?.charAt(0).toUpperCase() + onePokemon?.name?.slice(1)}</h4>
                <h5>Nickname: {onePokemon?.nickname?.charAt(0).toUpperCase() + onePokemon?.nickname?.slice(1)}</h5>
                <img src={onePokemon?.image} alt="a pokemon" />
                <PokeTypes onePokemon={onePokemon} />
            </div>
        </div>
    )
}

export default DisplayOne