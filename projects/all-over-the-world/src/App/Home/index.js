import React from 'react';
import globus from './globus.svg';
import './Home.css';

function Home(props) {
    let style = {
        backgroundImage: `url(${globus})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial',
        color: 'rgb(219,0,16)',
        fontWeight: 'bold'
    }
    return (
        <div style={style} className='home-wrapper'>
            <div className='text-wrapper'>
                <div className='title'>
                    <h1>Welcome</h1> 
                    <p className='to'>to</p>
                    <h1>All Over The World</h1>
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