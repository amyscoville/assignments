import React, { Component } from "react";
import Pets from './Pets';
import './index.css';

function Friend(props) {
    let pets = props.pets;
    return (
        <div className='friend-wrapper'>
            <h2>{props.name}</h2>
            <h4>Age: {props.age}</h4>
            <h4>Pets:</h4>
            {pets.map((pet, index)=>{
                return (
                    <Pets {...pet} key={index}></Pets>
                );
            })}
        </div>
    );
}

export default Friend;