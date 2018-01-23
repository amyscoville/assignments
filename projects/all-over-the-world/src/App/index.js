import React from 'react';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router';

import Home from './Home';
import Countries from './Countries';
import About from './About';
import Footer from './Footer';
import Country from './Countries/Country';

import './App.css';

function App(props) {
    let style = { 
        height: '100vh',
    }
    return (
        <div style={style}>
            <Navbar />
            <div className='content-wrapper'>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/countries' component={Countries}/>
                <Route path='/about' component={About}/>
                <Route path={`/countries/:alpha2Code`} component={Country}/> //props.match.params.name is how I'll access the name from the child component
            </Switch>
            </div>
        </div>
    )
}

export default App;
