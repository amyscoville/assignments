import React from 'react';
import facebook from './icons/facebook.png';
import instagram from './icons/instagram.png';
import twitter from './icons/twitter.png';
import whatsapp from './icons/whatsapp.png';
import youtube from './icons/youtube.png';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-wrapper'>
            <img className='icon' src={facebook} alt=""/>
            <img className='icon' src={instagram} alt=""/>
            <img className='icon' src={twitter} alt=""/>
            <img className='icon' src={whatsapp} alt=""/>
            <img className='icon' src={youtube} alt=""/>
        </div>
    )
}

export default Footer;
