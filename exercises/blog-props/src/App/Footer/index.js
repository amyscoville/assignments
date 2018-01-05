import React, { Component } from 'react';
import './index.css'
import facebook from './facebookcon.png';
import twitter from './twittercon.png';
import github from './twittercon.png';

function Footer(props) {
    return (
        <div className="footer-wrapper">
            <div className='icons'>
                <img className='twitter' src={twitter} alt=""/>
                <img className='facebook' src={facebook} alt=""/>
                <img className='github' src={github} alt=""/>
            </div>
            <div className='copyright'>Copyright &copy; Your Website 2017</div>
        </div>
    );
}

export default Footer;
