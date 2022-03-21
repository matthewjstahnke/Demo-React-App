import React, {useState, useEffect} from 'react';
import PokemonCard from './PokemonCard';
import Grid from '@mui/material/Grid';

const PokemonsContainer = () => {

  const [pokemons,setPokemons] = useState([]);
  const pokemonLimit = 151;

  const fetchPokemon = async () => {
    for(let i=1; i<=pokemonLimit; i++) {
      await getPokemon(i);
    }
  }

  const getPokemon = (id) => {
    
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    .then((res) => res.json())
    .then((data) => {
      
      setPokemons([...pokemons, ...data]);
    })
  };
  console.log(pokemons)

  useEffect(() => {
    fetchPokemon();
  },[]);


  return (
    <Grid container spacing={3} rowSpacing={1}>
      {pokemons.map(pokemon => <PokemonCard pokemon={pokemon} />)}
    </Grid>
  );
}

export default PokemonsContainer;