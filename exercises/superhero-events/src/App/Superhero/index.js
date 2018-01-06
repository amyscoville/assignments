import React, { Component } from 'react';
import './index.css';

class Superhero extends Component {
    constructor(props) {
        super(props);
        this.superhero = {
            ...props
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.superhero.displayCatchPhrase(this.superhero.catchphrase);
    }
    
    render() {
        return (
            <div className='superhero-wrapper'>
                <h1 onClick={this.handleClick} className='name'>{this.superhero.name}</h1>
                <img onClick={this.handleClick} className='image' src={this.superhero.imgUrl} alt={`Photo of ${this.superhero.name}`}/>
            </div>
        );
    }
}

export default Superhero;
