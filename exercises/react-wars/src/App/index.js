import React from 'react';
import Sidebar from './Sidebar';

import { Switch, Route, Link } from 'react-router-dom';

import Character from './Sidebar/Character';
import './App.css';


function App(props) {
    return (
        <div className='app-wrapper'>
            <h1 className='title'>REACT WARS</h1>
            <div className='main-wrapper'>
                <Sidebar></Sidebar>
                <Switch>
                    <Route path='/characters/:id' component={Character}></Route>
                </Switch>
            </div>
        </div>
    )
}

export default App;
