import './App.css';
import Nav from './components/Nav';
import PokemonsContainer from './components/PokemonsContainer';
import Typography from '@mui/material/Typography';


function App() {
  return (
    <div className="App">
      <Nav />
      <h1>PokeDex</h1>
      <PokemonsContainer />
    </div>
  );
}

export default App;
