import React, { Component } from 'react'
import './Form.css';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                title: '',
                description: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
    }

    clearInputs() {
        this.setState({
            inputs: {
                title: '',
                description: ''
            }
        })
    }

    handleSubmit(e) {
        let { add, id } = this.props;
        e.preventDefault();
        this.clearInputs();
        if (add) {
            this.props.submit(this.state.inputs)
        }
        else {
            this.props.submit(this.state.inputs, id)
        }
    }

    render() {
        let { title, description } = this.state.inputs;
        return (
            <form onSubmit={this.handleSubmit} className="form-wrapper">
                <p>Get the conversation going:</p>
                <input className="title" type="text" onChange={this.handleChange} placeholder="Title" name="title" value={title} />
                <textarea className="form-description" type="text" onChange={this.handleChange} placeholder="Description" name="description" value={description} />
                <button className='submit' type='submit'>POST</button>
            </form>
        )
    }
}
