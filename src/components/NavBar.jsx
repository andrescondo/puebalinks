import React from 'react'
import {Link} from 'react-router-dom'
import useAuth from "../hooks/useAuth";

const NavBar = () => {
  const {  isLogged } = useAuth()

  const handleSignuot = () => {
    localStorage.removeItem('token')
  }

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

        <ul>
          {
          isLogged 
          ? <input onClick={handleSignuot} type={'button'} value="Cerrar sesión"/>
          : false}
        </ul>
      </nav>

    </div>
  )
}

export default NavBar;