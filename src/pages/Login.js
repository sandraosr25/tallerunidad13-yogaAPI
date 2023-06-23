import React from 'react';
import { useState } from 'react';
import { useNavigate} from "react-router-dom";

export default function Login () {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleChangeNombreUsuario = (event) => {
        setUserName(event.target.value);
    };

    const handleChangeContraseña = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userName === 'sandra' && password === '1234') {
            localStorage.setItem("isLogged", "true");
            localStorage.setItem("username", userName);
            localStorage.setItem("password", password);
            navigate('/listado');

        } else {
            setError('Nombre de usuario o contraseña incorrectos');
        }
    };


  return(
        <div className='login'>
                <h2>Please Log in</h2>
                <p className='error-message'>{error}</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        User Name:
                        <input type='text' value={userName} onChange={handleChangeNombreUsuario}/>
                    </label>
                    <label>
                        Password:
                        <input type='password' value={password} onChange={handleChangeContraseña} />
                     </label>
                    <button type='submit'>Login</button>
                 </form>
        </div>
  );
}