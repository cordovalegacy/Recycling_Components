import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

const EditOne = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    console.log(id)
    const [newNickname, setNewNickname] = useState("")
    const [newBerryCount, setNewBerryCount] = useState(null)
    const [onePokemon, setOnePokemon] = useState({
        name: "",
        nickname: newNickname,
        type: "",
        image: "",
        berryCount: newBerryCount
    })
    const [errors, setErrors] = useState("")

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/pokemon/${id}`)
            .then((res) => {
                console.log("One Pokemon: ", res.data)
                setOnePokemon({
                    name: res.data.name,
                    nickname: res.data.nickname,
                    type: res.data.type,
                    image: res.data.image,
                    berryCount: res.data.berryCount
                })
                setNewNickname(res.data.nickname)
                setNewBerryCount(res.data.berryCount)
            })
            .catch((err) => {
                console.log("Something went wrong: ", err)
            })
    }, [])

    const editHandler = (e) => {
        const { name, image, type } = onePokemon
        const formData = { name, image, type, nickname: newNickname, berryCount: newBerryCount }
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/pokemon/${id}`, formData)
            .then((res) => {
                console.log("Success!", res.data)
                setOnePokemon({
                    name: res.data.name,
                    nickname: res.data.nickname,
                    image: res.data.image,
                    type: res.data.type,
                    berryCount: res.data.berryCount
                })
                navigate('/')
            })
            .catch((err) => {
                console.log("Something went wrong: ", err.response.data.err.errors.nickname.message)
                setErrors(err.response.data.err.errors.nickname.message)
            })
    }

    return (
        <>
        <h2 className="space">Edit Pokemon</h2>
        <form onSubmit={editHandler}>
            <div className="pokemon-card">
                <h4>Name: {onePokemon?.name?.charAt(0).toUpperCase() + onePokemon?.name?.slice(1)}</h4>
                <input id="new-nickname" type="text" onChange={(e) => setNewNickname(e.target.value)} value={newNickname} />
                {errors && newNickname.length < 3 || !newNickname ? <p className="errors">{errors}</p>: null }
                <img src={onePokemon?.image} alt="a pokemon" />
                <div>
                    <label>Berries: {onePokemon?.berryCount}</label>
                    <input id="new-nickname" type="number" onChange={(e) => setNewBerryCount(e.target.value)} value={newBerryCount} />
                </div>
                <p>Type: {onePokemon?.type?.charAt(0).toUpperCase() + onePokemon?.type?.slice(1)}</p>
            </div>
            <input type="submit" value="Edit Pokemon" />
        </form>
        </>
    )
}

export default EditOne