import React from 'react';
import { Button } from "semantic-ui-react";
import { useNavigate } from 'react-router-dom';

export default function Details() {
    const navigate = useNavigate(); 
    const selectedItem = JSON.parse(localStorage.getItem('item'));
    
    const backHome = () => {
        navigate("/listado");
    }

    return(
        <div className='detail-content'>
            <img className='detail-image' src={selectedItem.url_png} alt={selectedItem.url_svg_alt} />
                <div className='detail-info'>
                    <h2>🕉️{selectedItem.english_name}</h2>
                    <p id='detail-item'>Sanskrit name: <span id='sans-name'>{selectedItem.sanskrit_name}</span> </p>
                    <p id='detail-item'>Description: </p>   
                    <p>{selectedItem.pose_description}</p>
                    <p id='detail-item'>Benefits: </p>
                    <p>{selectedItem.pose_benefits}</p>
                    <p id='detail-item'>Category: </p>
                    <p>{selectedItem.category_name}</p>
                     <Button className='details-button' onClick={backHome}>
                        Back to list of postures</Button>
                </div>
        </div>
    
    );
}