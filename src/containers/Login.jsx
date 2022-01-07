import React, {useState} from "react";

const initialState = {
  email:'',
  password:''
}

const Login = () => {
  const [inputs, setInputs] = useState(initialState);

  const handleSubmit = (e) => {

  }
  return(
    <div className="Login">
      <div>
        <h2>Links</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>

          <input 
            type="email" 
            placeholder="email" 
            value={inputs.email} />
          <input 
            type="password" 
            placeholder="Contraseña"
             value={inputs.password} />

          <input type="submit" value="Iniciar sesión" />
        </form>
      </div>

    </div>
  )
}

export default Login;