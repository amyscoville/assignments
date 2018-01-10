import React from 'react';
import github from './icons/github.png';
import linkedin from './icons/linkedin.png';
import at from './icons/at.png';
import './index.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function Footer() {
    let contactTooltip = <Tooltip id="contact-tooltip">Contact</Tooltip>;
    let gitHubTooltip = <Tooltip id="github-tooltip">GitHub</Tooltip>;
    let linkedinTooltip = <Tooltip id="linkedin-tooltip">LinkedIn</Tooltip>;
    return (
        <div className='footer-wrapper'>
            <div className='icon-wrapper'>
                <OverlayTrigger placement="top" overlay={gitHubTooltip}>
                    <a href="https://github.com/amyscoville"><img className='icon' src={github} alt="github"/></a>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={contactTooltip}>
                    <a href="#"><img className='icon' src={at} alt="contact"/></a>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={linkedinTooltip}>
                    <a href="https://www.linkedin.com/in/amy-scoville/"><img className='icon' src={linkedin} alt="linkedin"/></a>
                </OverlayTrigger>    
            </div>  
        </div>
    );
}

export default Footer;
