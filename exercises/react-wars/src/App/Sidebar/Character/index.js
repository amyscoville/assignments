import React, { Component } from 'react';
import axios from 'axios';

import './Character.css';

const swUrl = 'https://swapi.co/api/people/';



export default class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: {},
            loading: true
        }
        this.getCharacterObj = this.getCharacterObj.bind(this);
    }

    componentDidMount() {
        let { id } = this.props.match.params;
        this.getCharacterObj(id);
    }

    componentWillReceiveProps(nextProps) {
        let {id} = this.props.match.params;
        let nextId = nextProps.match.params.id;
        if ( nextId !== id) {
            this.getCharacterObj(nextId);
        }
    }

    getCharacterObj(id) {
        axios.get(swUrl + id)
            .then(response => {
                this.setState({
                    character: response.data,
                    loading: false
                });
            })
            .catch(err => {
                console.error(err);
                this.setState({
                    loading: false
                });
            })
    }

    render() {
        let { name, height, mass, hair_color, skin_color } = this.state.character;
        let { loading } = this.state;
        return (
            loading ?
                <div>Thank you for your patience while your info loads...</div>
                :
                <div className='character-wrapper'>
                    <h3>Name: {name}</h3>
                    <h4>Height: {height}</h4>
                    <h4>Mass: {mass}</h4>
                    <h4>Hair Color: {hair_color}</h4>
                    <h4>Skin Color: {skin_color}</h4>
                </div>
        )
    }
}
