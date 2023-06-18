import React from 'react';
import { useNavigate } from "react-router-dom";
import Details from '../components/Details';
import { useState } from 'react';

export default function Postures() {
    const navigate = useNavigate();
    const [itemSeleccionado, setItemSeleccionado] = useState();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
      };  

 return (
    <div>
        <Details itemSeleccionado={itemSeleccionado} setItemSeleccionado={setItemSeleccionado}/>
        <button className="button-logout" onClick={handleLogout}>
            Cerrar Sesión
         </button>
    </div>
 );   
}
