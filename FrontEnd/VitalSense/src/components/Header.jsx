import React from 'react';
import './HeaderStyle.css';
import headerImage from '../assets/Logo.svg'

function Header() {
    return (
        <div>
            <img src={headerImage} alt="VitalSense" className="logo" />
        </div>
    );
}

export default Header;