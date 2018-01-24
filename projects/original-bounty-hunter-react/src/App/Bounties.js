import React, { Component } from 'react';
import axios from 'axios';

import Bounty from './Bounty';

const bountyUrl = 'http://localhost:5050/bounty';

class BountyDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounties: []
        }
    }

    componentDidMount() {
        axios.get(bountyUrl)
            .then(response => {
                this.setState({
                    bounties: response.data
                });
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        let { bounties } = this.state;
        return (
            <div>
                {bounties.map(bounty => {
                    return <Bounty {...bounty} />
                })}
            </div>
        )
    }
}

export default BountyDisplay;