import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const PokemonsContainer = () => {

  const [pokemon,setPokemon] = useState([]);
  const [pointer, setPointer] = useState("https://pokeapi.co/api/v2/pokemon?limit=251");

  const fetchPokemon = () => {

    fetch(pointer)
    .then((res) => res.json())
    .then((data) => {
      setPokemon([...pokemon, ...data.results]);
    })
  };
  
  useEffect(() => {
    fetchPokemon();
  },[]);

  return (
    <Box pl={3} pt={3}>
    <Grid container spacing={3} rowSpacing={3} columnSpacing={3} >
        {pokemon.map(pokemon => <Grid item xs="auto"> 
        <PokemonCard key={pokemon.name} pokemon={pokemon}  /> </Grid>)}
    </Grid>
    </Box>
  );
}

export default PokemonsContainer;