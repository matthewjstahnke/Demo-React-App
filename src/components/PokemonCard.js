
import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';

const PokemonCard = ( {pokemon} ) => {
  const { name, url } = pokemon;
  const id = url.split('/')[url.split('/').length - 2];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  

  // const clickHandler = (e) =>{
  //   console.log(e.target.alt)
  //   fetch(e.target.alt)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setPkmnData([data]);
  //   })
  // }

  return (
      <Card sx={{ maxWidth: 200 }}  >
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt={url}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" key={url}>
            { name
              .toLowerCase()
              .split(" ")
              .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
              .join(' ')}
          </Typography>

          <Typography variant="body2" color="text.secondary">
          <Link to={`/${id}`} state={{from:"pokemon container", url }} ><InfoIcon /></Link>
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default PokemonCard