import React from 'react';
import './header.css';
import logo from '../../images/Logo.svg';

const Header = () => {

    return (
        <div>
            <header className='header'>
                <img src={logo} alt="" />
                <nav>
                    <a href="/">Order</a>
                    <a href="/">Order Review</a>
                    <a href="/">Manage Inventory</a>
                    <a href="/">Login</a>
                </nav>
            </header>
        </div>
    );
};

export default Header;