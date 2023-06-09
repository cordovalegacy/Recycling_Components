import axios from "axios"
import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Berry from '../img/berry.png'
import Button from "./Button"
import PokeTypes from "./PokeTypes"

const DisplayAll = () => {

    const [pokeList, setPokeList] = useState([
        {
            name: "",
            nickname: "",
            type: "",
            image: "",
            berryCount: 0
        }
    ])

    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/pokemon')
            .then((res) => {
                console.log(res.data)
                const sortedPokemon = res.data.sort((a, b) => a.name > b.name ? 1 : -1)
                setPokeList(sortedPokemon)
            })
    }, [])

    const deleteHandler = (pokemonFromMap) => {
        axios
            .delete(`http://localhost:8000/api/pokemon/${pokemonFromMap}`)
            .then((res) => {
                console.log(`You have successfully deleted ${res.data}`)
                setPokeList(pokeList.filter((allOtherPokemon) => allOtherPokemon !== pokemonFromMap))// <=keep everything BUT the pokemon clicked on
                window.location.reload()
            })
            .catch((err) => {
                console.log("Something went wrong: ", err)
            })
    }

    const berryHandler = (pokemonFromMap) => {
        const updatedPokemon = {
            ...pokemonFromMap, berryCount: pokemonFromMap.berryCount + 1
        }
        setPokeList((prevState) => prevState.map((pokemon) => {
            if (pokemon._id === updatedPokemon._id) {
                return updatedPokemon
            }
            else {
                return pokemon
            }
        }))
        axios
            .put(`http://localhost:8000/api/pokemon/${pokemonFromMap._id}`, updatedPokemon)
            .then((res) => {
                console.log("Berry Count Updated: ", res.data)
                //shake animation ***************************************************
                let shake = document.getElementById(`pokemonImg-${pokemonFromMap._id}`)
                shake.classList.add('shake-it')
                setTimeout(() => {
                    shake.classList.remove('shake-it')
                }, 500)
                //shake animation ***************************************************
            })
            .catch((err) => {
                console.log("Something went wrong: ", err)
            })

    }

    return (
        <div>
            <h2 className="space">Pokemon Party</h2>
            <div className="poke-party">
                {
                    pokeList.map((pokemon, idx) => (
                        <div className="pokemon-card" key={idx}>
                            <h4>{pokemon?.name?.charAt(0).toUpperCase() + pokemon?.name?.slice(1)}</h4>
                            <h5>{pokemon?.nickname?.charAt(0).toUpperCase() + pokemon?.nickname?.slice(1)}</h5>
                            <img src={pokemon.image} id={`pokemonImg-${pokemon._id}`} alt="pokemon" className="opacity" onClick={() => navigate(`/displayOne/${pokemon._id}`)} />
                            <PokeTypes pokemon={pokemon} />
                            <p>Berries: {pokemon?.berryCount}</p>
                            <Button BtnVal={'EditDeleteBerries'} berryHandler={berryHandler} Berry={Berry} pokemon={pokemon} deleteHandler={deleteHandler}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DisplayAll