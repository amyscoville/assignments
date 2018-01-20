import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className='navbar-wrapper'>
                <Link className='links' to='/'>Home</Link>
                <Link className='links' to='/countries'>Countries</Link>
                <Link className='links' to='/about'>About</Link>
            </div>
        )
    }
}

export default Navbar;
