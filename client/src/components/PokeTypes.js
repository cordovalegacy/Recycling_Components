
const PokeTypes = (props) => {

    const { pokemon, onePokemon, } = props

    return (
        <>
            {pokemon ?
                <p
                    style={
                        pokemon.type === 'fire' ? { color: "red", fontWeight: "bolder" } :
                            pokemon.type === 'grass' ? { color: "darkgreen", fontWeight: "bolder" } :
                                pokemon.type === 'electric' ? { color: "yellow", fontWeight: "bolder" } :
                                    pokemon.type === 'water' ? { color: "blue", fontWeight: "bolder" } :
                                        pokemon.type === 'ice' ? { color: "lightblue", fontWeight: "bolder" } :
                                            pokemon.type === 'dragon' ? { color: "rebeccapurple", fontWeight: "bolder" } :
                                                pokemon.type === 'psychic' ? { color: "purple", fontWeight: "bolder" } :
                                                    pokemon.type === 'fighting' ? { color: "brown", fontWeight: "bolder" } :
                                                        pokemon.type === 'rock' ? { color: "beige", fontWeight: "bolder" }
                                                            : null
                    }>{pokemon?.type?.charAt(0).toUpperCase() + pokemon?.type?.slice(1)}</p> : null}
            {onePokemon ?
                <p
                    style={
                        onePokemon.type === 'fire' ? { color: "red", fontWeight: "bolder" } :
                            onePokemon.type === 'grass' ? { color: "darkgreen", fontWeight: "bolder" } :
                                onePokemon.type === 'electric' ? { color: "yellow", fontWeight: "bolder" } :
                                    onePokemon.type === 'water' ? { color: "blue", fontWeight: "bolder" } :
                                        onePokemon.type === 'ice' ? { color: "lightblue", fontWeight: "bolder" } :
                                            onePokemon.type === 'dragon' ? { color: "rebeccapurple", fontWeight: "bolder" } :
                                                onePokemon.type === 'psychic' ? { color: "purple", fontWeight: "bolder" } :
                                                    onePokemon.type === 'fighting' ? { color: "brown", fontWeight: "bolder" } :
                                                        onePokemon.type === 'rock' ? { color: "beige", fontWeight: "bolder" }
                                                            : null
                    }>{onePokemon?.type?.charAt(0).toUpperCase() + onePokemon?.type?.slice(1)}</p> : null}
        </>
    )

}

export default PokeTypes