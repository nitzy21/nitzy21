import React from 'react';
import './footer-elements.css';
import logo from '../../assets/nulogo.png';


const footer = () => {
    return (
        <div className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col-3">
                <img src={logo} alt="Logo" />
                <ul>
                    <li className= "title">NU INNOVATION TECH HUB</li>
                    <li className= "titlesub">Center for Innovation & Entrepreneurship</li>
                </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default footer
