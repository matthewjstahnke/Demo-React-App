import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';


const PokemonView = (data) => {
  console.log("in view", data)
  const { id, name, imageDW, imageD, imageB, type1, type2, hp, attack, sa, sd, speed, defense} = data;
  const urlOG = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/${id}.png`
  const urlOGB = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/${id}.png`

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
    <div>

    <Typography gutterBottom variant="h5" component="div" align="center">
		  {name.toUpperCase()} <br></br>Pokedex #{id}
    <div className="pkmnImg">
    <img            
      src={imageDW}
      alt={name}/>
    </div>
      </Typography>
    </div>
    <div className="statBox">
    <Typography variant="body2" color="text.secondary" fontWeight="bold"  align="left">
      Type 1: {type1} <br></br>Type 2: {type2 ? type2 : "n/a"}
    </Typography>
      <br />
      <div className="smallImg">
      <Box align="center">
        <img src= {imageD} className="imgFront" /> <img src= {imageB} className="imgBack" />
      </Box>
      </div>
      <Typography variant="body2" color="text.secondary" fontWeight="bold" align="left">
      {/* _________________________________________________________ */}
      Hit Points: {hp}<BorderLinearProgress variant="determinate" value={statRange(hp)} />
      Attack: {attack}<BorderLinearProgress variant="determinate" value={statRange(attack)} />
      Defense: {defense}<BorderLinearProgress variant="determinate" value={statRange(defense)} />
      Special Attack: {sa}<BorderLinearProgress variant="determinate" value={statRange(sa)} />
      Special Defense: {sd}<BorderLinearProgress variant="determinate" value={statRange(sd)} />
      Speed: {speed}<BorderLinearProgress variant="determinate" value={statRange(speed)} />
      
      {/* _________________________________________________________ */}
      

    </Typography>
    <img            
      src={urlOG}
      alt={name}/>
    <img            
      src={urlOGB}
      alt={name}/>
    </div>
    </>
  )
}

export default PokemonView