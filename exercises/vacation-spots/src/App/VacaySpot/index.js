import React, { Component } from 'react';

function VacaySpot(props) {
    let parentStyles = {
        backgroundColor: '',
        padding: '5px 20px'
    };
    let price = Number(props.price.slice(1));
    switch (props.timeToGo) {
        case 'Spring': 
            parentStyles.backgroundColor = 'lightpink';
            break;
        case 'Summer':
            parentStyles.backgroundColor = 'yellow';
            break;
        case 'Fall':
            parentStyles.backgroundColor = 'orange';
            break;
        case 'Winter':
            parentStyles.backgroundColor = 'lightblue';
            break;
    }
    if (price < 500) {
        price = '$';
    } else if (price < 1000) {
        price = '$$';
    } else if (price > 1000) {
        price = '$$$';
    }
    return (
        <div style={parentStyles}>
            <h3>{props.place}</h3>
            <h5>{price}</h5>
            <h5>Best time to go: {props.timeToGo}</h5>
        </div>
    );   
}

export default VacaySpot;

