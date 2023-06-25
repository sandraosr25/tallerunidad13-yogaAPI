import React from "react";
import YogaLogo from "../images/Yoga-logo.jpg";

export default function Header() {
    return (
        <div className='header'>
            <span><img className="yoga-logo" src={YogaLogo} alt="Yoga-logo" /></span>
            <h1>Yoga Postures (Asanas)</h1>
            <span><img className="yoga-logo" src={YogaLogo} alt="Yoga-logo" /></span>
        </div>
    );
}

