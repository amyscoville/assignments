import React, { Component } from 'react';
import Form from '../Form';
import Badge from './Badge';

export default class Badgelist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            badges: [], 
            backgroundColor: 'red'
        };
        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit(newBadge) {
        this.setState(prevState => {
            let {badges, backgroundColor} = prevState;
            let color = backgroundColor === 'red' ? 'blue' : 'red'
            return {
                badges: [...badges, newBadge],
                backgroundColor: color
            };
        });
    }

    render() {
        let { badges, backgroundColor } = this.state;
        return (
            <div className='badgelist-wrapper'>
                <Form submit={this.formSubmit}></Form>
                {badges.map((badge, index) => {
                    
                    return <Badge backgroundColor={backgroundColor} {...badge} key={index} ></Badge>;
                })}
            </div>
        )
    }
}
