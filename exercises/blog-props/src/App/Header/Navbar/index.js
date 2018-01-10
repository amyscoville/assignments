import React, { Component } from 'react';
import './index.css';

function Navbar(props) {
    return (
        <div className='navbar-wrapper'>
            <p className='start'>Start Bootstrap</p>
            <ul className='navbar-ul'>
                <li className='navbar-li'><a href="">HOME</a></li>
                <li className='navbar-li'><a href="">ABOUT</a></li>
                <li className='navbar-li'><a href="">SAMPLE POST</a></li>
                <li className='navbar-li'><a href="">CONTACT</a></li>
                <li className='menu'>MENU</li>
            </ul>

        </div>
    );
}

export default Navbar;