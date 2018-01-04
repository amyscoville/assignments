import React, { Component } from 'react';
import './index.css'

import Services from './Services';
import Info from './Info';

function Main(props) {
    return (
        <div className='main-wrapper'>
            <Services></Services>
            <Info></Info>
        </div>
    );
}

export default Main;
