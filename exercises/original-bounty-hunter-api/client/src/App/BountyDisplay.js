import React, { Component } from 'react';
import Bounty from './Bounty';


class BountyDisplay extends Component {

    render() {
        let { bounties, loading, removeBounty, editBounty } = this.props;
        return (
            loading ?
                <div>
                    loading
                </div>
                :
                <div>
                    {bounties.map((bounty, index) => {
                        return <Bounty key={index + bounty.firstName}{...bounty} editBounty={editBounty} removeBounty={removeBounty} />
                    })}
                </div>
        )
    }
}

export default BountyDisplay;