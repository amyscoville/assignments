import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                imgUrl: '',
                title: '',
                description: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target;
        this.setState(prevState => {
            return {
                ...prevState.inputs,
                [name]: value
            }
        });
        console.log(this.state);
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     alert('Handle submit is being called!');
    // }

    render() {
        let { imgUrl, title, description } = this.state.inputs;
        return (
            <form className='form-wrapper'>
                <input placeholder='URL for an ugly image' name='imgUrl' value={imgUrl} onChange={this.handleChange} type="text" />
                <input placeholder='Title of the ugly image' name='title' value={title} onChange={this.handleChange} type="text" />
                <input placeholder='Tell us why you think this is ugly' name='description' value={description} onChange={this.handleChange} type="text" />
                <button>submit</button>
            </form>
        )
    }
}

export default Form;
