import React, { Component } from 'react';
import './Form.css';

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
            },
            submit: props.submit,
            emptyInputs: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let {name, value} = e.target;
        let {firstName, lastName, email, birthPlace, phone, favFood, bio} = this.state.inputs;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        }); 
        //why is this registering after you hit the fourth one? is it the render?
        if(firstName.length >= 3 && lastName.length >= 3 && email.length >= 3 && birthPlace.length >= 3 && phone.length >= 3 && favFood.length >= 3 && bio.length >= 3) {
            this.setState({
                emptyInputs: false
            });
        } else {
            this.setState({
                emptyInputs: true
            });
        }
    }

    clearInputs() {
        this.setState({
            inputs: {
                firstName: '',
                lastName: '',
                email: '',
                birthPlace: '',
                phone: '',
                favFood: '',
                bio: ''
            },
            emptyInputs: true
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let {phone} = this.state.inputs;
        if (!(/^\d+$/g.test(phone)) || phone.length !== 10) {
                alert('Not a valid phone number. \n\nPlease enter a 10-digit number without letters or special characters. \n\nEx: 8018523384');
        } else {
            this.state.submit(this.state.inputs);
            this.clearInputs();
        }
        
    }

    render() {
        let {firstName, lastName, email, birthPlace, phone, favFood, bio} = this.state.inputs;
        let {emptyInputs} = this.state;
        return (
            <form className='form-wrapper'>
                <div className='input-wrapper'>
                    <input onChange={this.handleChange} className='inputs fName' type="text" placeholder='First Name' value={firstName} name='firstName'/>
                    <input onChange={this.handleChange} className='inputs lName' type="text" placeholder='Last Name' value={lastName} name='lastName'/>
                    <input onChange={this.handleChange} className='inputs email' type="text" placeholder='Email' value={email} name='email'/>
                    <input onChange={this.handleChange} className='inputs birthplace' type="text" placeholder='Place of Birth' value={birthPlace} name='birthPlace'/>
                    <input onChange={this.handleChange} className='inputs phone' type="text" placeholder='Phone (numbers only, ex: 8015327746)' value={phone} name='phone'/>
                    <input onChange={this.handleChange} className='inputs favFood' type="text" placeholder='Favorite Food' value={favFood} name='favFood'/>
                </div>
                <textarea onChange={this.handleChange} className='inputs bio' type="text" placeholder='Tell us about yourself' value={bio} name='bio'/>
                <button className='submit' type='submit' disabled={emptyInputs} onClick={this.handleSubmit}>submit</button>
            </form>
        );
    }
}
