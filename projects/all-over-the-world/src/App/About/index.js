import React from 'react';
import './About.css';

function About(props) {
    return (
        <div className='about-wrapper'>
            <img className='book-cover' src="https://images-na.ssl-images-amazon.com/images/I/61RZG1EW63L._SX258_BO1,204,203,200_.jpg" alt=""/>
            <div className='about-text'>
            <p>All Over the World was inspired by <a href='https://www.amazon.com/Whoever-You-Reading-Rainbow-Books/dp/0152060308' className='book-title'>"Wherever You Are,"</a> a children's book by Mem Fox. </p>
            <p>Their smiles are like yours, and they laugh just like you. Their hurts are like yours, and they cry like you too, whoever they are, wherever they are, all over the world.</p>
            </div>
        </div>
    )
}

export default About;
