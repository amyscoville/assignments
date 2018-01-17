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
            <div onClick={this.handleClick} className='superhero-wrapper'>
                <h1 className='name'>{this.superhero.name}</h1>
                <img className='image' src={this.superhero.imgUrl} alt={`Photo of ${this.superhero.name}`}/>
            </div>
        );
    }
}

export default Superhero;
