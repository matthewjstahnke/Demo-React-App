import './App.css';
import Nav from './components/Nav';
import PokemonsContainer from './components/PokemonsContainer';
import { Routes, Route } from 'react-router-dom'
import Pokemon from './components/Pokemon';
import TemporaryDrawer from './components/TemporaryDrawer';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
       <Route path="/:id" element={<Pokemon />} />
       <Route path="/test" element={<TemporaryDrawer />} />
       <Route path="/" element={<PokemonsContainer />} />
      </Routes>
    </div>
  );
}

export default App;
