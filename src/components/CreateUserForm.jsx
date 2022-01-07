import React, { useState, useEffect } from 'react'
import { fetchRequest } from '../helpers/helpCore';

const initialState = {
  name: '',
  job: ''
}
const CreateUserForm = ({methodFetch, id}) => {
  const [inputs, setInputs] = useState(initialState);
  const method = methodFetch ? methodFetch : 'POST'
  const idUrl = id ? id : '';

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, job } = inputs;
    if (name && job) {
      fetchRequest({name, job, method, url:'/api/users', idUrl})
      .then( res => {
        alert('Listo')
        setInputs(initialState);
      })
    }
  }
  return (
    <div>

      <h3>
        {id ? 'Editar Usuario ' : 'Crear Usuario'}
      </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <p>Ingrese un nombre</p>
          <input
            type="text"
            name="name"
            id="name"
            value={inputs.name}
            placeholder='Ingrese un nombre'
            onChange={handleChange}
            required />


        </label>
        <label htmlFor="job">
          <p>Ingrese un trabajo</p>
          <input
            type="text"
            name="job"
            id="job"
            value={inputs.job}
            placeholder='Ingrese un trabajo'
            onChange={handleChange}
            required />
        </label>

        <input type="submit" value="Crear Usuario" />
      </form>
    </div>
  )
}

export default CreateUserForm