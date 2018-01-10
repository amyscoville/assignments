import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

function App(props) {
    return (
        <div className='app-wrapper'>
            <Navbar></Navbar>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/about' component={About}></Route>
            </Switch>
        </div>
    );
}

export default App;