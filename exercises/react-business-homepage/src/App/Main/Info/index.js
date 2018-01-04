import React, { Component } from "react";
import './index.css';

function Info(props) {
    return (
        <div className='info-wrapper'>
            <div className='restaurant'><img src="https://media-cdn.tripadvisor.com/media/photo-s/02/e4/63/21/spice-circle-indian-restaurant.jpg" alt=""/></div>
            <p className='words'>Punjab Palace is a family-owned restaurant passed down through three generations. We pride ourselves in offering high-quality, authentic, affordable Indian fare.</p>
            <p className='words'>Due to its popularity in the Boston area, Punjab Palace recently became a franchise, with locations in Cambridge, Somerville, and Rockport.</p>
            <p className='words'>Follow the link below to learn more about opening a franchise of your own!</p>
        </div>
    ) 
}

export default Info;