import React, { Component } from 'react';
import VacaySpot from './VacaySpot';
import './index.css'

function App() {
    let vacationSpots = [  
        {
          place: "Meridian, Idaho",
          price: "$40",
          timeToGo: "Spring"
        },{
          place: "Cancun",
          price: "$900",
          timeToGo: "Winter"
        },{
          place: "China",
          price: "$1200",
          timeToGo: "Fall"
        },{
          place: "Russia",
          price: "$1100",
          timeToGo: "Summer"
        },{
          place: "Lebanon",
          price: "$400",
          timeToGo: "Spring"
        }
    ];
    return (
        <div className='app-wrapper'>
            {vacationSpots.map((spot, index) => {
                return (
                    <div className='spot-wrapper'>
                        <VacaySpot {...spot} key={index}></VacaySpot>
                    </div>
                );
            })}
        </div>
    );
}

export default App;



