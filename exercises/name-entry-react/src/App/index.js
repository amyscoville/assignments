import React, { Component } from 'react';
import ListItem from './ListItem';
import './index.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [],
            inputName: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleChange(e) {
        this.setState({inputName: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        let { inputName } = this.state;
        this.setState(prevState => {
            return {
                names: [...prevState.names, inputName]
            }
        });
        this.clearInputs();
    }

    clearInputs(){
        this.setState({inputName: ''});
    }

    reset() {
        this.setState({names: [], inputName: ''});
    }
    
    render() {
        let {names, inputName} = this.state;
        return (
            <form className='app-wrapper'>
                <input className='name-input' type="text" onChange={this.handleChange} value={inputName} name='inputName' placeholder='Full Name'/>
                <h1>{inputName}</h1>
                <button className='addName' type='submit' onClick={this.handleSubmit} onKeyPress={this.handleKeyPress}>add name</button>
                <ol className="nameList">
                    {names.map((name, index) => {
                        return <ListItem name={name} key={index}></ListItem>
                    })}
                </ol>
                <button onClick={this.reset}>clear list</button>
            </form>
        )
    }
}

export default App;
