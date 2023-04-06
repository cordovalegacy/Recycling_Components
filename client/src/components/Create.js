import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import pokeBall from '../img/pokeball.png'

const Create = () => {

    const [name, setName] = useState("")
    const [nickname, setNickname] = useState("")
    const [type, setType] = useState("")
    const [image, setImage] = useState(pokeBall)
    const [berryCount, setBerryCount] = useState(0)
    const [errors, setErrors] = useState({
        searchErrors: "",
        postErrors: ""
    })

    const navigate = useNavigate()

    const searchHandler = (e) => {
        e.preventDefault()
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
            .then((res) => {
                console.log(res.data)
                setName(res.data.name)
                setType(res.data.types[0].type.name)
                setImage(res.data.sprites.front_shiny)
                setErrors({
                    searchErrors: "",
                    postErrors: ""
                })
            })
            .catch((err) => {
                console.log("Something went wrong: ", err)
                setErrors({...errors, searchErrors: "Must be a valid pokemon name"})
            })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = { name, nickname, type, image, berryCount } //<= this is called the payload
        axios
            .post("http://localhost:8000/api/pokemon", formData)
            .then((res) => {
                console.log("Success!", res.data)
                setErrors({
                    searchErrors: "",
                    postErrors: ""
                })
                navigate('/')
            })
            .catch((err) => {
                console.log("Something went wrong: ", err.response.data.err.errors.nickname.message)
                setErrors({...errors, postErrors: err.response.data.err.errors.nickname.message})
            })
    }

    return (
        <>
        <h2 className="space">Add Pokemon</h2>
        <form onSubmit={submitHandler} id="pokedex">
            <div id="left">
                <div id="logo"></div>
                <div id="bg_curve1_left"></div>
                <div id="bg_curve2_left"></div>
                <div id="curve1_left">
                    <div id="buttonGlass">
                        <div id="reflect"> </div>
                    </div>
                    <div id="miniButtonGlass1"></div>
                    <div id="miniButtonGlass2"></div>
                    <div id="miniButtonGlass3"></div>
                </div>
                <div id="curve2_left">
                    <div id="junction">
                        <div id="junction1"></div>
                        <div id="junction2"></div>
                    </div>
                </div>
                <div id="screen">
                    <div id="topPicture">
                        <div id="buttontopPicture1"></div>
                        <div id="buttontopPicture2"></div>
                    </div>
                    <div id="picture">
                        <img id="sprite-pic" src={image} alt="Pokemon"
                            height="170" />
                    </div>
                    <div id="buttonbottomPicture"></div>
                    <div id="speakers">
                        <div className="sp"></div>
                        <div className="sp"></div>
                        <div className="sp"></div>
                        <div className="sp"></div>
                    </div>
                </div>
                <button onClick={searchHandler} id="bigbluebutton"></button>
                <div id="barbutton1"></div>
                <div id="barbutton2"></div>
                <div id="cross">
                    <div id="leftcross">
                        <div id="leftT"></div>
                    </div>
                    <div id="topcross">
                        <div id="upT"></div>
                    </div>
                    <div id="rightcross">
                        <div id="rightT"></div>
                    </div>
                    <div id="midcross">
                        <div id="midCircle"></div>
                    </div>
                    <div id="botcross">
                        <div id="downT"></div>
                    </div>
                </div>
            </div>
            <div id="right">
                <div id="stats">
                    <div>
                        <label>PokeSearch: </label>
                        <input id="search-bar" type="text" placeholder="Pokemon Names" onChange={(e) => setName(e.target.value)} />
                    </div>
                    {errors.searchErrors !== "" ? <p className="errors">{errors.searchErrors}</p>: null}
                    {name && type && image ? <ul id="stats-list">
                        <li>Name: {name.charAt(0).toUpperCase() + name.slice(1)} |</li>
                        <li>Type: {type.charAt(0).toUpperCase() + type.slice(1)}</li>
                        <div id="nickname-wrapper">
                            <label>Nickname: </label>
                            {errors.postErrors && nickname.length < 3 || !nickname ? <p className="errors">{errors.postErrors}</p>: null}
                            <input id="search-bar" placeholder="meep" onChange={(e) => setNickname(e.target.value)} />
                            <input type="submit" value="Add to party" />
                        </div>
                    </ul> : null}
                </div>
                <div id="blueButtons1">
                    <div className="blueButton"></div>
                    <div className="blueButton"></div>
                    <div className="blueButton"></div>
                    <div className="blueButton"></div>
                    <div className="blueButton"></div>
                </div>
                <div id="blueButtons2">
                    <div className="blueButton"></div>
                    <div className="blueButton"></div>
                    <div className="blueButton"></div>
                    <div className="blueButton"></div>
                    <div className="blueButton"></div>
                </div>
                <div id="miniButtonGlass4"></div>
                <div id="miniButtonGlass5"></div>
                <div id="barbutton3"></div>
                <div id="barbutton4"></div>
                <div id="yellowBox1"></div>
                <div id="yellowBox2"></div>
                <div id="bg_curve1_right"></div>
                <div id="bg_curve2_right"></div>
                <div id="curve1_right"></div>
                <div id="curve2_right"></div>
            </div>
        </form>
        </>
    )
}

export default Create