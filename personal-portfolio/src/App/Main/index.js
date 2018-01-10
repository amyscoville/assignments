import React from 'react';
import Portfolio from './Portfolio';
import About from './About';
import Resume from './Resume';
import './index.css';
import './code.png';

function Main() {
    return (
        <div className='main-wrapper'>
            <div className="main-overlay">
                <p>I'm Amy.</p>
                <p>I don't even know what I can do right now.</p>
                <About></About>
                <Portfolio></Portfolio>
                <Resume></Resume>
            </div>
        </div>
    );
}

export default Main;
