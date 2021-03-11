import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="container header-bg">
            <div className="overlay">
                <h1 style={{fontSize: '60px', marginLeft: '15px'}}>Football Mania</h1>
            </div>
        </div>
    );
};

export default Header;