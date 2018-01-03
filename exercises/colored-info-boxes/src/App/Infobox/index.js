import React, { Component } from 'react';

function Infobox(props) {
    return (
        <div style={props.parentStyle}>
            <h1>{props.boxProps.title}</h1>
            <h2>{props.boxProps.subtitle}</h2>
            <p>{props.boxProps.information}</p>
        </div>
    );
}

export default Infobox;