
import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { CardActionArea } from '@mui/material';



const PokemonCard = ( {pokemon} ) => {
  const { name, url } = pokemon;
  const id = url.split('/')[url.split('/').length - 2];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  const pokemonText = `https://pokeapi.co/api/v2/pokemon-species/${id}/`
  const [pokemonData, setPokemonData] = useState([])
  const [loading, setLoading] = useState(false);


  
  // const fetchPokemonData = () => {
  //   fetch(pokemonText)
  //   .then((res) => res.json())
  //   .then((data) => { 
  //     setPokemonData(data);
  //     setLoading(false);
  //     console.log("working?")
  //   })
    
    
  // };
  // console.log(pokemonData)
  
  // useEffect(() => {
  //   fetchPokemonData();
  // },[]);
  //const { color } = pokemonData.color.name
  //const { flavor } = pokemonData.flavor_text_entries[1].flavor_text


  return (
    


      <Card sx={{ maxWidth: 200 }} onClick={<Link to={`/pokemon/${id}`}></Link>} >
      <CardActionArea >
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
          {loading ? (
            <p>Loading</p>
              ) : (  
            <p>place holder</p>  )
          }
                          
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

  )
}

export default PokemonCard