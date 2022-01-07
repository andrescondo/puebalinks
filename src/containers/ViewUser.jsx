import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchRequest } from '../helpers/helpCore';

const ViewUser = () => {
  const [data, setData] = useState(false);

  useEffect(async () => {
    const { id } = await useParams();
    fetchRequest({ url:`/api/user${id}`, method: 'GET' })
      .then(res => {
        setData(res.data);
      })
  }, [])

  return (
    <div className='Datos del usuarios'>
      {
        data &&
        <div>
          <p><strong>Nombre</strong> {data?.name}</p>
          <p><strong>Año</strong> {data?.year}</p>
          <p><strong>Color HEX.</strong> {data?.color}</p>
        </div>
      }
    </div>
  )
}
export default ViewUser;