import React from 'react'

const PokemonView = ({data}) => {
  console.log("in view", data)
  const { name, url, id , stats, weight, types} = data;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`


  return (
    <>
    <div>PokemonView</div>
    <img src={imageUrl} alt={name}></img><br></br>
    {name} <br></br>Pokedex #{id} 
    <br></br>
    Weight : {weight}
    </>
  )
}

export default PokemonView