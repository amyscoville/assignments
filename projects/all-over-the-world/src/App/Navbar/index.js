import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className='navbar-wrapper'>
                <Link className='links' to='/'> <span className='start'>&#9733;</span> Home</Link>
                <Link className='links' to='/countries'><span className='start'>&#9733;</span> Countries</Link>
                <Link className='links' to='/about'><span className='start'>&#9733;</span> About</Link>
            </div>
        )
    }
}

export default Navbar;
