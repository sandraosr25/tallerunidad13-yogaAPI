import React from 'react';
import Details from '../components/Details';
import { useState } from 'react';
import Logout from '../components/Logout';

export default function Postures() {
    const [itemSelected, setItemSelected] = useState();

 return (
    <div>
        <Details itemSelected={itemSelected} setItemSelected={setItemSelected}/>
        <Logout />
    </div>
 );   
}
