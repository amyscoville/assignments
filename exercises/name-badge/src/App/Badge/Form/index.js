import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

    handleChange() {
        this.setState(prevState => {
            return {
                ...prevState.inputs,
                
            }
        })
    }

    handleSubmit() {
        this.setState({
            inputs: {
                
            }
        });
    }

    render() {
        let {firstName, lastName, email, birthPlace, phone, favFood, bio} = this.state.inputs;
        <input onChange={this.handleChange} value={title} name="title"type="text" placeholder="title"/>
        return (
            <form action="">
                <input onChange={this.handleChange} type="text" placeholder='First Name' value={firstName} name='firstName'/>
                <input onChange={this.handleChange} type="text" placeholder='Last Name' value={lastName} name='lastName'/>
                <input onChange={this.handleChange} type="text" placeholder='Email' value={email} name='email'/>
                <input onChange={this.handleChange} type="text" placeholder='Place of Birth' value={birthPlace} name='birthPlace'/>
                <input onChange={this.handleChange} type="text" placeholder='Phone' value={phone} name='phone'/>
                <input onChange={this.handleChange} type="text" placeholder='Favorite Food' value={favFood} name='favFood'/>
                <input onChange={this.handleChange} type="text" placeholder='Tell us about yourself' value={bio} name='bio'/>
                <button type='submit'></button>
            </form>
        );
    }
}
