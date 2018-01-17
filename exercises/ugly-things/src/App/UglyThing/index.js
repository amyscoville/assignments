import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUgly } from '../../redux/uglies.js';
import './index.css'

function UglyThing (props) {
    let { imgUrl, title, description } = props;
    return (
        <div className='ugly-wrapper'>
            <h2 className='title'>{title}</h2>
            <p className='description'>{description}</p>
            <img className='ugly-image' src={imgUrl} />
        </div>
    )
}


export default connect(null, { addUgly })(UglyThing);
