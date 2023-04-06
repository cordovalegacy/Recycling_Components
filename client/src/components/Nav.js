import { Link } from "react-router-dom";
import pokeBall from '../img/pokeball.png'

const Nav = () => {

    return (
        <nav>
            <Link id='pokeHome' to='/'><img id='pokeball' src={pokeBall} /></Link>
            <h1>Welcome to the PokeCenter!</h1>
            <Link to='/pokedex'>Pokedex</Link>
        </nav>
    )

}

export default Nav