import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom'
import PokemonView from './PokemonView';


const Pokemon = ({state}) => {
  const [pkmnData, setPkmnData] = useState([]) 
  const location = useLocation()
  const pkmnUrl = location.state.url

  console.log(pkmnUrl)
  
  useEffect(() => {
    fetchPkmnData(pkmnUrl)
  },[]);
  
  const fetchPkmnData = (pkmnUrl) => {
    fetch(pkmnUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log("data", data)
      setPkmnData(data);
    })
  };
  
  console.log("Data in PKMN", pkmnData)
  
  
  return (
    <PokemonView data={pkmnData}/>
  )
}

export default Pokemon