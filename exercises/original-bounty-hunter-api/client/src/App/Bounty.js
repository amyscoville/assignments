import React from 'react'

function Bounty(props) {
    let {firstName, lastName, living, bountyAmt, type} = props;
    return (
        <div>
            <h2>{`${firstName} ${lastName}`}</h2>
            <h3>Living: {living}</h3>
            <h3>Price: ${bountyAmt}.00</h3>
            <h3>{type}</h3>
            <button>edit</button>
            <button>x</button>
        </div>
    )
}

export default Bounty;
