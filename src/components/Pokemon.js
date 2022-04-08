import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom'
import PokemonView from './PokemonView';


const Pokemon = ({state}) => {
  const [pkmnData, setPkmnData] = useState([]) 
  const location = useLocation()
  const pkmnUrl = location.state.url

  console.log("Top of pokemon",pkmnUrl)
  
  useEffect(() => {
    fetchPkmnData(pkmnUrl)
    console.log("Use Effect",pkmnUrl)
  },[]);
  
  const fetchPkmnData = (pkmnUrl) => {
    fetch(pkmnUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log("data", data)
      setPkmnData([data]);
    })
  };
  
  console.log("Data in PKMN", pkmnData)
  
  
  return (
    <>
    {pkmnData.map((data) =>
    <PokemonView key={data.id}
    id={data.id}
    type1={data.types[0].type.name}
    type2={data.types[1] ? data.types[1].type.name : undefined}
    imageDW={data.sprites.other.dream_world.front_default}
    imageD={data.sprites.front_default}
    imageB={data.sprites.back_default}
    hp={data.stats[0].base_stat}
    attack={data.stats[1].base_stat}
    defense={data.stats[2].base_stat}
    sa={data.stats[3].base_stat}
    sd={data.stats[4].base_stat}
    speed={data.stats[5].base_stat}
    abilty1={data.abilities[0].ability.name}
    name={data.species.name}
    />
    )}


    </>
  )
}

export default Pokemon