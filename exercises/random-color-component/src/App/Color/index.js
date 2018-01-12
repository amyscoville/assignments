import React, { Component } from 'react';
import axios from 'axios';

import './Color.css';

const colorUrl = 'http://www.colr.org/json/color/random';

export default class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'white'
        }
        this.getBackgroundColor = this.getBackgroundColor.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.getBackgroundColor();
    }

    getBackgroundColor(){
        axios.get(colorUrl)
            .then(response => {
                let color = response.data.colors[0].hex;
                console.log(color);
                this.setState({
                    backgroundColor: color
                })
            })
            .catch(err => {
                console.error(err);
            })
    }

    handleClick() {
        this.getBackgroundColor();
    }

    render() {
        let style = {backgroundColor: `#${this.state.backgroundColor}`}
        return (
            <div style={style} className='color-wrapper' onClick={this.handleClick}>
                Color Component
            </div>
        )
    }
}
