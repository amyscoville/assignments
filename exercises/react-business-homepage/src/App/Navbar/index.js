import React, { Component } from "react";
import './index.css';

function Navbar() {
    return (
        <div className='navbar-wrapper'>
            <div className='restaurant-name'>Punjab Palace</div>
            <ul className='navbar-list'>
                <li className='navbar-li'><a href="#">HOME</a></li>
                <li className='navbar-li'><a href="#">MENU</a></li>
                <li className='navbar-li'><a href="#">LOCATIONS</a></li>
                <li className='navbar-li'><a href="#">ORDER ONLINE</a></li>
            </ul>
        </div>
    );
}

export default Navbar;