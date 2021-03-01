import React from 'react';
import logo from '../../image/logo.png';
import './Header.css';


const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img  src={logo} alt=""/>
            </div>
            <div>
            <nav>
                <a href="/player">PLayer</a>
                <a href="/teams">Teams</a>
                <a href="/live-scores">Live Scores</a>
            </nav>
            </div>
            
        </div>
    );
};

export default Header;