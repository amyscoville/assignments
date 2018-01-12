import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

import './App.css';

function App(props) {
    return (
        <div className='app-wrapper'>
            <Navbar></Navbar>
            <Header></Header>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/about' component={About}></Route>
                <Route path='/services' component={Services}></Route>
            </Switch>
            <Footer></Footer>
        </div>
    );
}

export default App;