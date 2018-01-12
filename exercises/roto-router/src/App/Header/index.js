import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <div className='header-wrapper'>
            <img className='image' src="http://www.terryvereenplumbing.net/wp-content/uploads/sites/100/2015/05/slider3.jpg" alt="plumber with water heater"/>
            <div className="logo-wrapper">
                <h1>ROTO-ROUTER</h1>
                <h4>The company you can trust to route your rotos.</h4>
            </div>
        </div>
    )
}

export default Header;
