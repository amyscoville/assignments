import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUgly } from '../redux/uglies.js';

class Form extends Component {
    constructor(props) {
        super(props);
        let { imgUrl, title, description } = props;
        this.state = {
            inputs: {
                imgUrl: imgUrl || '',
                title:  title || '',
                description: description || ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(e) {
        e.preventDefault();
        let { addUgly, index } = this.props;
        addUgly(this.state.inputs);
        this.clearInputs();
    }

    clearInputs() {
        this.setState({
            inputs: {
                imgUrl: '',
                title: '',
                description: ''
            }
        })
    }

    render() {
        let { imgUrl, title, description } = this.state.inputs;
        return (
            <form className='form-wrapper' onSubmit={this.handleSubmit}>
                <input className='input' placeholder='URL for an ugly image' name='imgUrl' value={imgUrl} onChange={this.handleChange} type="text" />
                <input className='input' placeholder='Title of the ugly image' name='title' value={title} onChange={this.handleChange} type="text" />
                <input className='input' placeholder='Tell us why you think this is ugly' name='description' value={description} onChange={this.handleChange} type="text" />
                <button>submit</button>
            </form>
        )
    }
}

export default connect(null, {addUgly}) (Form);
