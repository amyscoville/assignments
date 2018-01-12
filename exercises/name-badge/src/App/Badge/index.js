import React, { Component } from 'react';
import Form from './Form';

export default class Badge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            badges: [],
            inputs: {
                firstName: '',
                lastName: '',
                email: '',
                birthPlace: '',
                phone: '',
                favFood: '',
                bio: ''
            }
        }
    }
    render() {
        return (
            <div>
                <Form></Form>
            </div>
        );
    }
}
