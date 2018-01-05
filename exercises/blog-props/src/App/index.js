import React, { Component } from 'react';
import Header from './Header';
import Bloglist from './Bloglist';
import Footer from './Footer';
import './index.css';

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header></Header>
            <Bloglist></Bloglist>
            <Footer></Footer>
        </div>
    );
}

export default App;
