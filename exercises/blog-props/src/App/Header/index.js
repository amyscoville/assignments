import React, { Component } from 'react';
import Navbar from './Navbar';
import './index.css';


function Header(props) {
    return (
        <div className="header-wrapper">
            <div className="layer">
                <Navbar></Navbar>
                <div className='title-wrapper'>
                    <h1>Clean Blog</h1>
                    <h3>A Blog Theme by Start Bootstrap</h3>
                </div>
            </div>
        </div>
    );
}

export default Header;