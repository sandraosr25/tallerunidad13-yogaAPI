import React from "react";
import Item from "./Item";


export default function Listado ({DatosPosturas, onItemClick}){
    return(
        <div className='listado'>
            <div className='item-list'>
                {DatosPosturas.map((item) => (
                    <Item key={item.id} item={item} onItemClick={onItemClick} />
                ))}
            </div>
        </div>
    );
}
