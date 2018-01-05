import React, { Component } from 'react';
import './index.css';

function Blog(props) {
    return (
        <div className='blog-wrapper'>
            <h1 className='title'>{props.title}</h1>
            <h2 className='subtitle'>{props.subtitle}</h2>
            <p className='date'>Posted by <span className='start-bootstrap'>Start Bootstrap</span> on <span>{props.date}</span></p>
        </div>
    );
}

export default Blog;
