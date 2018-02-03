import React, { Component } from 'react';
import axios from 'axios';
import BountyDisplay from './BountyDisplay';

const bountyUrl = '/bounty';


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
        this.removeBounty = this.removeBounty.bind(this);
        this.editBounty = this.editBounty.bind(this);
    }

    componentDidMount() {
        axios.get(bountyUrl)
            .then(response => {
                this.setState({
                    bounties: response.data,
                    loading: false
                });
            })
            .catch(err => {
                console.error(err);
            });
    }

    removeBounty(_id) {
        let { bounties } = this.state;
        axios.delete(bountyUrl + '/' + _id)
            .then(response => {
                this.setState({
                    bounties: bounties.filter((bounty, index) => {
                        return bounty._id !== _id
                    }),
                    loading: false
                })
            })
            .catch(err => {
                console.error(err);
            });
    }

    editBounty(_id, updatedBounty) {
        let { bounties } = this.state;
        let newBounties = bounties;
        axios.put(bountyUrl + '/' + _id, updatedBounty)
            .then(response => {
                for(let i = 0; i < newBounties.length; i++) {
                    if(newBounties[i]._id === _id) {
                        newBounties[i] = Object.assign(newBounties[i], updatedBounty);
                        updatedBounty = newBounties[i];
                        this.setState({
                            bounties: newBounties
                        })
                    }
                }
            });
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

    handleChange(e) {
        let { name, value } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
    }

    handleSubmit(e) {
        let bounty = this.state.inputs
        e.preventDefault();
        axios.post(bountyUrl, bounty)
            .then(response => {
                this.setState(prevState => ({
                    bounties: [...prevState.bounties, response.data],
                    loading: false
                }));
            })
            .catch(err => {
                console.error(err);
            });
        this.clearInputs();
    }

    clearInputs() {
        this.setState({
            inputs: {
                firstName: '',
                lastName: '',
                living: '',
                bountyAmt: '',
                type: ''
            }
        })
    }

    render() {
        let { firstName, lastName, bountyAmt } = this.state.inputs;
        let { bounties, loading } = this.state;
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
                <BountyDisplay loading={loading} bounties={bounties} removeBounty={this.removeBounty} editBounty={this.editBounty}/>
            </div>
        )
    }
}
