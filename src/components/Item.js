import React from "react";

export default function Item({ item, onItemClick }) {
    return (
        <div className='item' onClick={() => onItemClick(item.id)}>
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
    );
}
