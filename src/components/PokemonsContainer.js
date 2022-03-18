import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard';
import Grid from '@mui/material/Grid';

const PokemonsContainer = () => {

  const [pokemons,setPokemons] = useState([]);
  const [pointer,setPointer] = useState("https://pokeapi.co/api/v2/pokemon/");

  useEffect(() => {
    fetchPokemons();
  },[pointer]);
  
  
  const fetchPokemons = () => {

    fetch(pointer)
    .then((res) => res.json())
    .then((data) => {
      function createPokemonOject(result){
        result.forEach( async (pokemon) => {
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setPokemons([...pokemons, ...data])})
          })         
        }
        createPokemonOject(data.results)      
        setPointer(data.next);
    })
  };

  return (
    <Grid container spacing={3} rowSpacing={1}>
      {pokemons.map(pokemon => <PokemonCard pokemon={pokemon} />)}
    </Grid>
  );
}

export default PokemonsContainer;