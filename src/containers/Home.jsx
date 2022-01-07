import React, { useState, useEffect } from "react";
import { fetchRequest } from "../helpers/helpCore";
import { Link } from 'react-router-dom'

import '../app/styles/style.css'

const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchRequest({ method: 'GET', url: '/api/user?page=1' })
      .then(res => {
        console.log(res);
        if (res?.data) {
          setData(res?.data);
        }

      })
  }, [])

  const handleDelete = (id) => {
    fetchRequest({url:'/api/users', idUrl:id , method:'DELETE'})
    .then(res => alert('Eliminado con exito'))
  }

  return (
    <div>
      <div>
        <h2>Bienvenido!</h2>
      </div>


      <div>
        Lista de usuarios:
        <div>
          {
            data?.map((data, key) => {
              return (
                <div key={key} className="list-card">
                  <p><strong>Nombre</strong> {data?.name}</p>
                  <p><strong>Año</strong> {data?.year}</p>
                  <p><strong>Color HEX.</strong> {data?.color}</p>
                  <div className="list-card__buttton">
                    <input type="button" value="Eliminar usuario" onClick={() => handleDelete(data?.id)} />

                    <Link
                      to={{
                        pathname: `/edit-user/${data.id}`,
                      }}>
                      Editar Usuario
                    </Link>
                  </div>

                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home;