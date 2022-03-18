import React from 'react'
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
<div className="nav">

<ul>
  <li><Link to="/pokemon">Pokedex</Link></li>
  <li><a href="#">Types</a></li>
  <li><a href="#">Games</a></li>
  <li><a href="#">About</a></li>
</ul>

</div>
  )
}

export default Nav