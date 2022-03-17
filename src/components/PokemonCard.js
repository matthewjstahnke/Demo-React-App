
import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const PokemonCard = ( {pokemon} ) => {
  const { name, url } = pokemon;
  const pokemonIndex = url.split('/')[url.split('/').length - 2];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
  const pokemonText = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`
  const [pokemonData, setPokemonData] = useState([])
  const { flavor } = pokemonData

  const fetchPokemonData = () => {
    fetch(pokemonText)
    .then((res) => res.json())
    .then((data) => {
      
      setPokemonData([...pokemonData, ...data.flavor_text_entries]);
    })
  };

  useEffect(() => {
    fetchPokemonData();
  },[]);


  return (
    <Card sx={{ maxWidth: 200 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name
              .toLowerCase()
              .split(" ")
              .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
              .join(' ')}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PokemonCard