import './App.css';
import Nav from './components/Nav';
import PokemonsContainer from './components/PokemonsContainer';
import { Routes, Route } from 'react-router-dom'
import Pokemon from './components/Pokemon';


function App() {
  return (
    <div className="App">
      <Nav />
      <h1>PokeDex</h1>
      <Routes>
       <Route path="/:id" element={<Pokemon />} />
       <Route path="/" element={<PokemonsContainer />} />
      </Routes>
    </div>
  );
}

export default App;
