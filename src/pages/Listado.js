import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import Logout from "../components/Logout";

export default function Listado() {
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState('');
    
    const [postures, setPostures] = useState([]);

    const doFetch = async () => {
        const api = await fetch('https://yoga-api-nzy4.onrender.com/v1/poses')
        const posturesApi = await api.json();
        setPostures(posturesApi);
    }

    useEffect(() =>{
        doFetch()
    });

    const onItemClick = (itemId) => {
        const selectedItem = postures.find((posture) => posture.id === itemId);
        setSelectedItem(selectedItem);
        localStorage.setItem('item', JSON.stringify(selectedItem));
        console.log(selectedItem);
        navigate("/details");
    };

    return(
        <div className='listado'>
            <Logout /> 
            <h3 className='mensaje-seleccion-postura'>Click on a posture to get the details</h3> 
            <div className='item-list'>
                {postures.map((posture) => (
                    <div className='item' key={posture.id} item={posture} onClick={() => onItemClick(posture.id)} >
                        <img className='item-image' src={posture.url_png} alt={posture.url_svg_alt} />
                        <div className='item-content'>
                            <h3 className='item-name'> {posture.english_name}</h3>
                            <p>
                                <span id='detail-item'>Sanskrit name: </span>
                                <span>{posture.sanskrit_name}</span>
                            </p>
                            <p>
                                <span id='detail-item'> Translation name: </span>
                                <span>{posture.translation_name}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <Logout /> 
        </div>        
    );
}