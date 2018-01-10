import React from 'react';
import './index.css';

function Nav() {
    return (
        <div className='nav-wrapper'>
            <div className="link-container">
                <a className='link about-me' href="#">about me</a>
            </div>
            <div className="link-container">
                <a className='link portfolio' href="#">portfolio</a>
            </div>
            <div className="link-container">
                <a className='link resume' href="#">resume</a>
            </div>
        </div>
    );
}

export default Nav;
