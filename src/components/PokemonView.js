import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
const PokemonView = (data) => {
  console.log("in view", data)
  const { id, name, imageDW, type1} = data;
  return (
    <>
    <Typography gutterBottom variant="h5" component="div">
		  {name.toUpperCase()} <br></br>Pokedex #{id}
    </Typography>
    <CardMedia           
      component="img"
      height="50"
      width="25"
      image={imageDW}
      alt={name}/>
    <br></br>
    <br></br>
    <p>Type : {type1.toUpperCase()} </p>
    </>
  )
}

export default PokemonView