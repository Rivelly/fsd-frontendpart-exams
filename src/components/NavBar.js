import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <div>
        <nav>
            <div className="logo">Travel-Story</div>
            <ul className="nav-links">
                <li><a>Home</a></li>
                <li><a>Travel-Story</a></li>
                <li><a>Over ons</a></li>
                <li><a>Inschrijven</a></li>
                <li><a>Contact</a></li>
            </ul>
            <i className="fas fa-bars burger"></i>
        </nav>
        </div>
    )
}

export default NavBar