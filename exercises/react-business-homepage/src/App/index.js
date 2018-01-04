import React, { Component } from "react";
import './index.css';

//components
import Navbar from './Navbar';
import Footer from './Footer';
import Main from './Main'

function App(props) {
    return (
        <div className="app-wrapper">
            <Navbar></Navbar>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}

export default App;