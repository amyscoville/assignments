import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Form.js';
import UglyThing from './UglyThing';
import './App.css';

function App(props) {
    let { uglies } = props;
    return (
        <div>
            <Form></Form>
           <div className='uglies-wrapper'>
                {uglies.map((ugly, index) => {
                    return <UglyThing {...ugly} key={index + ugly.title}/>
                })}
           </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return { uglies: state.uglies };
}

export default connect(mapStateToProps, {})(App);