import React from 'react';
import Form from './Form';

import BountyDisplay from './Bounties';

import './App.css';

function App(props) {
    return (
        <div className='app-wrapper'>
            <Form/>
            <BountyDisplay/>
        </div>
    )
}

export default App;
