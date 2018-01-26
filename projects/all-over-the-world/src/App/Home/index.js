import React from 'react';
import {Link} from 'react-router-dom';

import globus from './globus.svg';
import './Home.css';

function Home(props) {
    let style = {
        backgroundImage: `url(${globus})`
    }
    return (
        <div style={style} className='home-wrapper'>
            <div className='text-wrapper'>
                <div className='title-wrapper'>
                    <h1 className='welcome'>Welcome to</h1> 
                    <h1 className='title'>All Over The World</h1>
                    <Link className='explore' to='/countries'> Explore! </Link>
                </div>
                <div className='poem'>
                    <p className='poem-lines'>"Little one, whoever you are,</p>
                    <p className='poem-lines'>there are little ones just like you</p>
                    <p className='poem-lines'>all over the world."</p>
                    <p className='poem-lines'>~ Mem Fox</p>
                </div>
            </div>
        </div>
    )
}

export default Home;