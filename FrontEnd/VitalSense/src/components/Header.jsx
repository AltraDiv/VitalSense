import React from 'react';
import './HeaderStyle.css';
import headerImage from '../assets/Untitled.svg';

function Header() {
    return (
        <div>
            <img src={headerImage} alt="VitalSense" className="logo" />
        </div>
    );
}

export default Header;