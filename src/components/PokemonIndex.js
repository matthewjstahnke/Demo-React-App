import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const PokemonIndex = ( {pokemon} ) => {
  const { name, url } = pokemon;
  const pokemonIndex = url.split('/')[url.split('/').length - 2];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
 

  return (
    <Card sx={{ maxWidth: 300 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="fit"
          image={imageUrl}
          alt={pokemonIndex, name}
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
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PokemonIndex