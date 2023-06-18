import React from 'react';
import { useState } from 'react';
import { useNavigate} from "react-router-dom";

export default function Login () {
    const navigate = useNavigate();
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState('');

    const handleChangeNombreUsuario = (event) => {
        setNombreUsuario(event.target.value);
    };

    const handleChangeContraseña = (event) => {
        setContraseña(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (nombreUsuario === 'sandra' && contraseña === '1234') {
            localStorage.setItem("isLogged", "true");
            localStorage.setItem("username", nombreUsuario);
            localStorage.setItem("password", contraseña);
            navigate('/listado');

        } else {
            setError('Nombre de usuario o contraseña incorrectos');
        }
    };


  return(
        <div className='login'>
                <h2>Inicia sesión</h2>
                <p className='mensaje-error'>{error}</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nombre de usuario:
                        <input type='text' value={nombreUsuario} onChange={handleChangeNombreUsuario}/>
                    </label>
                    <label>
                        Contraseña:
                        <input type='password' value={contraseña} onChange={handleChangeContraseña} />
                     </label>
                    <button type='submit'>Iniciar sesión</button>
                 </form>
        </div>
  );
}