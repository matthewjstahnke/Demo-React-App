import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';


const PokemonView = (data) => {
  console.log("in view", data)
  const { id, name, imageDW, imageD, type1, hp, attack, sa, sd, speed, defense} = data;

  const statRange = (value) => ((value - 0) * 100) / (256 - 0);

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));

  return (
    <>
    <Typography gutterBottom variant="h5" component="div">
		  {name.toUpperCase()} <br></br>Pokedex #{id}
    </Typography>
    <img          
      src={imageDW}
      alt={name}/>
    <br></br>
    <Typography variant="body2" color="text.secondary">
      <p>Type : {type1.toUpperCase()} </p>
      <br />
      <img src= {imageD}/>
      <h5>_________________________________________________________</h5>
      <p>Hit Points: {hp}<BorderLinearProgress variant="determinate" value={statRange(hp)} /></p>
      <p>Attack: {attack}<BorderLinearProgress variant="determinate" value={statRange(attack)} /></p>
      <p>Defense: {defense}<BorderLinearProgress variant="determinate" value={statRange(defense)} /></p>
      <p>Special Attack: {sa}<BorderLinearProgress variant="determinate" value={statRange(sa)} /></p>
      <p>Special Defense: {sd}<BorderLinearProgress variant="determinate" value={statRange(sd)} /></p>
      <p>Speed: {speed}<BorderLinearProgress variant="determinate" value={statRange(speed)} /></p>
      
      <h5>_________________________________________________________</h5>
      

    </Typography>
    </>
  )
}

export default PokemonView