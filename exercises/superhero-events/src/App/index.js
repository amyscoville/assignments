import React, { Component } from 'react';
import superheroes from './superheroes';
import Superhero from './Superhero';
import './index.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.displayCatchPhrase = this.displayCatchPhrase.bind(this);
    }
    displayCatchPhrase(str) {
        alert(str);
    }
    render() {
        return (
        <div className="app-wrapper">
            {superheroes.map((superhero, index) => {
                return (
                        <Superhero displayCatchPhrase={this.displayCatchPhrase} {...superhero} key={index}></Superhero>
                );
            })}
        </div>
        );
        
    }
}

export default App;