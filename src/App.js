import './App.css';
import Nav from './components/Nav';
import PokemonsContainer from './components/PokemonsContainer';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Nav />
      <h1>PokeDex</h1>
      <Routes>
       <Route path="/" element={<PokemonsContainer />} />
      </Routes>
    </div>
  );
}

export default App;
