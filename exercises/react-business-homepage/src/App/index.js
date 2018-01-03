import React, { Component } from "react";
import './index.css';

//components
import Navbar from './Navbar';
import Products from './Products';
import Info from './Info';
import Footer from './Footer';

function App(props) {
    return (
        <div className="app-wrapper">
            <Navbar></Navbar>
            <Products></Products>
            <Info></Info>
            <Footer></Footer>
        </div>
    );
}

export default App;