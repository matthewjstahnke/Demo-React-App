import React, {useState, useEffect} from 'react'

const TypeSwitch = (type) => {
  //const [pkmnType,setPkmnType] = useState(type);

  // useEffect(() => {
  //   renderSwitch(pkmnType)
  // })


 
  
  
  // const renderSwitch=(pkmnType) => {
  //   console.log('switcher',pkmnType)
    switch(type) {
      case 'grass':
        return 'https://www.serebii.net/pokedex-bw/type/grass.gif';
        // default:
        //   return 'https://www.serebii.net/pokedex-rs/type/normal.gif';
        }
      
      
      //console.log('out side of render',pkmnType)
  return (
    <>
      <img            
      src={type}
      alt='type' />
    </>
  )
}

export default TypeSwitch