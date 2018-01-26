import React from 'react';
import './About.css';

function About(props) {
    return (
        <div className='about-wrapper'>
            <div className='book-cover-wrapper'>
                <img className='book-cover' src="https://images-na.ssl-images-amazon.com/images/I/61RZG1EW63L._SX258_BO1,204,203,200_.jpg" alt=""/>
            </div>            
            <div className='about-text'>
                <p className='about-p'><span className='site-title'>All Over the World</span> was inspired by <a href='https://www.amazon.com/Whoever-You-Reading-Rainbow-Books/dp/0152060308' className='book-title'>Wherever You Are</a>, a children's book by Mem Fox. The book helps children understand that though people from around the world are different, there are many commonalities that bind us together. Here, children can learn about things they may have in common with children in other countries, and things that are very different!</p>
                <div className='book-poem'>
                    <p>"Their smiles are like yours, and they laugh just like you.</p>
                    <p>Their hurts are like yours, and they cry like you too,</p>
                    <p>whoever they are, wherever they are, all over the world."</p>
                </div>
            </div>
        </div>
    )
}

export default About;
