import React, { useState } from "react";
import { authenticate, fetchPost, fetchRequest } from '../helpers/helpCore';
import useAuth from "../hooks/useAuth";

const initialState = {
  email: '',
  password: ''
}

const Login = () => {
  const [inputs, setInputs] = useState(initialState);
  const { login, isLogged } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault();

    const {email, password} = inputs;
    if(email && password){
      fetchPost({email, password, url:'/api/login'})
      .then(res => {
        const {error, token} = res;

        if(error){
          alert('Login fallido')
        } else {
          authenticate(token);
          login(token);
        }
      })
    }

  }

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="Login">
      <div>
        <h2>Links</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            required />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={inputs.password}
            onChange={handleChange}
            required />

          <input type="submit" value="Iniciar sesión" />
        </form>
      </div>

    </div>
  )
}

export default Login;