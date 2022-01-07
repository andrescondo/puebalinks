import React from 'react'
import {Link} from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='navbar'>
      <h2>
        Links
      </h2>
      <nav>
        <ul>
          <Link to="create-user">
            Crear usuarios
          </Link>
        </ul>
        <ul>
        </ul>
        <ul>
          <Link to="/home">
            Ver lista de usuarios
          </Link>
        </ul>
      </nav>

    </div>
  )
}

export default NavBar;