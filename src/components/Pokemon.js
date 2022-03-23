import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom'


const Pokemon = ({state}) => {
  const [pkmnData, setPkmnData] = useState([]) 
  const location = useLocation()
  const pkmnUrl = location.state.url.url


  
  
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
  
  console.log("working", pkmnData)
  
  
  return (
    <div>{pkmnUrl}</div>
  )
}

export default Pokemon