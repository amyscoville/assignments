import React from 'react';
import './index.css';

function Person(props) {
    return (
        <div className='person-wrapper' style={props.style}>
            <h4 className='name'>{props.name}</h4>
        </div>
    )
}

export default Person;
