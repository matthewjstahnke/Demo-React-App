
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
  const [loading, setLoading] = useState(true);

  const fetchPokemonData = () => {
    fetch(pokemonText)
    .then((res) => res.json())
    .then((data) => { 
      setPokemonData([...pokemonData, ...data]);
        setLoading(false);
    })
    

  };

  useEffect(() => {
    fetchPokemonData();
  },[]);
  //const { color } = pokemonData.color.name
  //const { flavor } = pokemonData.flavor_text_entries[1].flavor_text


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