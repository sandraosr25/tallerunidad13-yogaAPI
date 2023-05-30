import React from 'react';
import {useState} from 'react';

export default function Login({onLogin}) {
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
        //Validación de credenciales: revisar JWT (JSON Web Tokens) o autenticación basada en sesiones.
        if(nombreUsuario === 'sandra' && contraseña === '1234'){
            onLogin();
        }else{
            setError('Nombre de usuario o contraseña incorrectos');
        }
    };

    return(
        <div className='login'>
            <h2>Inicia sesión</h2>
            <p className='error-message'>{error}</p>
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
