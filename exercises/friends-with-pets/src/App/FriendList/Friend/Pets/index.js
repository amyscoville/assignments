import React, { Component } from "react";

function Pets(props) {
    return (
        <ul>
            <li>{props.name}: {props.breed}</li>
        </ul> 
    );
}

export default Pets;