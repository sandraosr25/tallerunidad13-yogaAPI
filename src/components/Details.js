import React from 'react';
import { Button } from "semantic-ui-react";

export default function Details({itemSeleccionado, setEstadoListado}) {
    const resetEstadoListado = () => {
        setEstadoListado(false);
    }
    return(
        <div className='detail-content'>
            <img className='detail-image' src={itemSeleccionado.image} alt={itemSeleccionado.name} />
                <div className='detail-info'>
                    <h2>🕉️{itemSeleccionado.name}</h2>
                    <p id='detail-item'>Descripción: </p>   
                    <p>{itemSeleccionado.description}</p>
                    <p id='detail-item'>Beneficios: </p>
                    <p>{itemSeleccionado.morebenefits}</p>
                    <p id='detail-item'>Grupos musculares involucrados: </p>
                    <p>{itemSeleccionado.musculos}</p>
                    <p id='detail-item'>Mira este video para ver cómo se hace: <span></span>
                        <Button className="video-button" href={itemSeleccionado.href} target="blank">{itemSeleccionado.name}</Button>
                    </p>
                     <Button className='details-button' onClick={resetEstadoListado}>
                        Volver al Inicio</Button>
                </div>
        </div>
    
    );
}
