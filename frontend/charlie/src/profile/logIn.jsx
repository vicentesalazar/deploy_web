import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import axios from 'axios';
import './logIn.css';


function Login() {
  const { token, setToken } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(import.meta.env.VITE_BACKEND_URL)
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        email: email,
        password: password
      }).then((response) => {
        console.log('Login successful', response);
        setError(false);
        setMsg("Login exitoso!");
        // Recibimos el token y lo procesamos
        const access_token = response.data.access_token;
        console.log(access_token)
        localStorage.setItem('token', access_token);
        setToken(access_token);
        console.log("Se seteo el token: ", token);
      }).catch((error) => {
        console.error('An error occurred while trying to login:', error);
        setError(true);// aquí puede haber más lógica para tratar los errores
      })

  };

  const navigate = useNavigate();
  
  const goBack = () => {
		navigate(-1);
	}


  return (
    <dir>
      <div className='buttonText'><a onClick={goBack}>Volver</a></div>
    <br />
    <div className="contenedorLogIn">
      <div className="Login">
        {msg.length > 0 && <div className="successMsg"> {msg} </div>}

        {error && <div className="error">Hubo un error con el Login, por favor trata nuevamente.</div>}
        <form onSubmit={handleSubmit}>
          <label>
            Mail:
            <input 
              type="email" 
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Contraseña:
            <input 
              type="password" 
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>
      <div><img className="imagenCharlie" src="\src\assets\Charlie_Rules_the_World.webp" alt="" /></div>
      </div>
      </dir>
  );
}

export default Login;