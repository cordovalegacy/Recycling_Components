import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import pokeBall from './img/pokeball.png'
import Create from './components/Create';
import DisplayAll from './components/DisplayAll';
import DisplayOne from './components/DisplayOne';
import EditOne from './components/EditOne';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link id='pokeHome' to='/'><img id='pokeball' src={pokeBall} /></Link>
          <h1>Welcome to the PokeCenter!</h1>
          <Link to='/pokedex'>Pokedex</Link>
        </nav>
        <Routes>
          <Route exact path='/' element={<DisplayAll />} />
          <Route path='/pokedex' element={<Create />} />
          <Route path='/displayOne/:id' element={<DisplayOne />} />
          <Route path='/editOne/:id' element={<EditOne />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
