import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard';
import Grid from '@mui/material/Grid';

const PokemonsContainer = () => {

  const [pokemon,setPokemon] = useState([]);
  const [pointer, setPointer] = useState("https://pokeapi.co/api/v2/pokemon?limit=252");

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
    <Grid container spacing={3} rowSpacing={1}>
      {pokemon.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
    </Grid>
  );
}

export default PokemonsContainer;