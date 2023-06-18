import { useNavigate } from "react-router-dom";
import React from "react";
import { DatosPosturas } from "../Objeto";
import { useState } from "react";

export default function Home() {
    const navigate = useNavigate();
    const [itemSeleccionado, setItemSeleccionado] = useState('');
    
    const onItemClick = (itemId) => {
        const itemSeleccionado = DatosPosturas.find((item) => item.id === itemId);
        setItemSeleccionado(itemSeleccionado);
        localStorage.setItem('item', JSON.stringify(itemSeleccionado));
        navigate("/details");
    };
   
    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
      };  

    return(
        <div className='listado'>
            <h3 className='mensaje-seleccion-postura'>Selecciona una postura para ver los detalles</h3> 
            <div className='item-list'>
                {DatosPosturas.map((item) => (
                    <div className='item' key={item.id} item={item} onClick={() => onItemClick(item.id)} >
                        <img className='item-image' src={item.image} alt={item.name} />
                        <div className='item-content'>
                            <h3 className='item-name'>{item.name}</h3>
                            <p>
                                <span id='detail-item'>Nombre en sánscrito: </span>
                                <span>{item.sanscrito}</span>
                            </p>
                            <p>
                                <span id='detail-item'> Nombre en inglés: </span>
                                <span>{item.ingles}</span>
                            </p>
                            <p>
                                <span id='detail-item'>Beneficios: </span>
                                <span>{item.benefits}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="button-logout" onClick={handleLogout}>
                Cerrar Sesión
            </button> 
        </div>        
    );
}