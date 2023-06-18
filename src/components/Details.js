import React from 'react';
import { Button } from "semantic-ui-react";
import { useNavigate } from 'react-router-dom';

export default function Details() {
    const navigate = useNavigate(); 
    const selectedItem = JSON.parse(localStorage.getItem('item'));
    
    const backHome = () => {
        navigate("/Listado");
    }

    return(
        <div className='detail-content'>
            <img className='detail-image' src={selectedItem.image} alt={selectedItem.name} />
                <div className='detail-info'>
                    <h2>🕉️{selectedItem.name}</h2>
                    <p id='detail-item'>Descripción: </p>   
                    <p>{selectedItem.description}</p>
                    <p id='detail-item'>Beneficios: </p>
                    <p>{selectedItem.morebenefits}</p>
                    <p id='detail-item'>Grupos musculares involucrados: </p>
                    <p>{selectedItem.musculos}</p>
                    <p id='detail-item'>Mira este video para ver cómo se hace: <span></span>
                        <Button className="video-button" href={selectedItem.href} target="blank">{selectedItem.name}</Button>
                    </p>
                     <Button className='details-button' onClick={backHome}>
                        Volver al listado de posturas</Button>
                </div>
        </div>
    
    );
}