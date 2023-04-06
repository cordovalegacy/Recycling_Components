import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './components/Create';
import DisplayAll from './components/DisplayAll';
import DisplayOne from './components/DisplayOne';
import EditOne from './components/EditOne';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
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
