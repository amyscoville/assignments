import React, { Component } from 'react';
import axios from 'axios';
import BountyDisplay from './BountyDisplay';

const bountyUrl = 'http://localhost:5050/bounty';


export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                firstName: '',
                lastName: '',
                living: false,
                bountyAmt: '',
                type: ''
            },
            bounties: [],
            loading: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getBounties = this.getBounties.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target;
        if (name === 'living') {
            if (value === 'true') {
                value = true;
            } else {
                value = false;
            }
        }
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
        console.log(this.state.inputs);
    }

    handleSubmit(e) {
        let bounty = this.state.inputs
        e.preventDefault();
        axios.post(bountyUrl, bounty)
            .then(response => {
                console.log('response:', response);
            })
            .catch(err => {
                console.error(err);
            });
        this.clearInputs();
    }

    getBounties(){
        axios.get(bountyUrl) 
            .then(response => {
                this.setState({
                    bounties: response.data
                })
            })
            .catch(err => {
                console.error(err);
            });
    }

    clearInputs() {
        this.setState({
            inputs: {
                firstName: '',
                lastName: '',
                living: false,
                bountyAmt: '',
                type: ''
            }
        })
    }

    render() {
        let { firstName, lastName, bountyAmt } = this.state.inputs;
        let { bounties } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='form-wrapper'>
                    <h1 className='title'>Original Bounty Hunters</h1>
                    <input onChange={this.handleChange} name='firstName' value={firstName} type='text' placeholder='First Name' />
                    <input onChange={this.handleChange} name='lastName' value={lastName} type="text" placeholder="Last Name" />
                    <label className='radio-wrapper'>
                        Living?
                        <input onChange={this.handleChange} type="radio" name="living" value='true' />   True
                        <input onChange={this.handleChange} type="radio" name="living" value='false' />   False
                    </label>
                    <input onChange={this.handleChange} name="bountyAmt" value={bountyAmt} type="number" placeholder="Bounty Amount" />
                    <label className='radio-wrapper'>
                        Type:
                        <input onChange={this.handleChange} type="radio" name="type" value="Jedi" /> Jedi
                        <input onChange={this.handleChange} type="radio" name="type" value="Sith" /> Sith
                    </label>
                    <input type="submit" value="SUBMIT" />
                </form>
                <BountyDisplay bounties = {bounties}/>
            </div>
        )
    }
}
