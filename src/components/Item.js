import React from "react";

export default function Item({item, onItemClick }) {
    return (
        <div className='item' key={item.id}  onClick={() => onItemClick(item.id)} >
            <img className='item-image' src={item.url_png} alt={item.url_svg_alt} />
            <div className='item-content'>
                <h3 className='item-name'> {item.english_name}</h3>
                <p>
                    <span id='detail-item'>Sanskrit name: </span>
                    <span>{item.sanskrit_name}</span>
                </p>
                <p>
                    <span id='detail-item'> Translation name: </span>
                    <span>{item.translation_name}</span>
                </p>
                <p>
                    <span id='detail-item'> Category: </span>
                    <span>{item.category_name}</span>
                </p>
            </div>
        </div>
    );
}

