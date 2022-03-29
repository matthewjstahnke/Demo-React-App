import React from 'react'
import { Link } from 'react-router-dom';
import GamesIcon from '@mui/icons-material/Games';
import ListIcon from '@mui/icons-material/List';


const Nav = () => {
  return (
<div className="nav">

<ul>
  <li><Link to="/">Pokedex <ListIcon /></Link></li>
  <li><a href="#">Games <GamesIcon /></a></li>
</ul>

</div>
  )
}

export default Nav