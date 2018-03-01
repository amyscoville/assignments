import React from 'react';
import Issues from './Issues';

function App() {
    let style = {
        backgroundImage: "url('https://images.unsplash.com/photo-1432164245265-ab19a48c3d09?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5c269116c97672919066fe916e4043e9&auto=format&fit=crop&w=1050&q=80')",
        width: "100%",
        height: "300px",
        backgroundPosition: "center 43%"
    }
    return (
        <div>
            <header style={style}></header>
            <Issues />
        </div>
    )
}

export default App;
