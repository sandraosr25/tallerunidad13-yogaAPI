import React from 'react';
import { Button } from "semantic-ui-react";

export default function Details({itemSeleccionado, setItemSeleccionado}) {
    const resetItems = () => {
        setItemSeleccionado(null);
    }
    return(
        <div className='detail-content'>
            <img className='detail-image' src={itemSeleccionado.image} alt={itemSeleccionado.name} />
                <div className='detail-info'>
                    <h2>{itemSeleccionado.name}</h2>
                    <p id='detail-item'>Descripción: </p>
                    <p>{itemSeleccionado.description}</p>
                    <p id='detail-item'>Beneficios: </p>
                    <p>{itemSeleccionado.benefits}</p>
                    <p id='detail-item'>Grupos musculares involucrados: </p>
                    <p>{itemSeleccionado.musculos}</p>
                     <Button className='details-button' onClick={resetItems}>
                        Volver al Inicio</Button>
                </div>
        </div>
    
    );
}
