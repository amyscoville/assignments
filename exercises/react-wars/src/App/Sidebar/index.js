import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Character from './Character';
import './Sidebar.css';

const swapi = 'https://swapi.co/api/people/';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            err: '',
            errMsg: ''
        }
    }

    componentDidMount() {
        axios.get(swapi)
            .then(response => {
                console.log(response.data.results);
                this.setState({
                    characters: response.data.results
                });
                
            })
            .catch(err => {
                this.setState({
                    err: err,
                    errMsg: err.msg
                })
                console.error(err.message);
            })
    }

    render() {
        let { characters } = this.state;
        return (
            <div className='sidebar-wrapper'>
                {characters.map((character, index) => {
                    return <Link to={`/characters/${index + 1}`} key={index} className='link'>{character.name}</Link>
                })}
            </div>
        )
    }
}
