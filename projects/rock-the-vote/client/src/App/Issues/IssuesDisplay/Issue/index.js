import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateIssue } from '../../../../redux/issues';

import './Issue.css';
import Comments from './Comments';

import thumbsDown from './thumbs-down.png';
import thumbsUp from './thumbs-up.png';

class Issue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideComments: true
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    
    vote(type, issue) {
        if (type === 'up') {
            issue.upvotes = String(+issue.upvotes + 1);
        } else if (type === 'down') {
            issue.downvotes = String(+issue.downvotes + 1);
        }
        issue.totalVotes = String(+issue.totalVotes + 1);
        this.props.updateIssue(issue)

    }

    toggleDisplay() {
        this.setState({
            hideComments: false
        })
    }

    render() {
        let { issue } = this.props;
        return (
            <div className="issue-wrapper">
                <div className="issue-info">
                    <h1>{issue.title}</h1>
                    <p className="issue-description">{issue.description}</p>
                    <div className="voting">
                        <span className="total">Total Votes: {issue.totalVotes || 0}</span>
                        <div>
                            <a className="thumb" onClick={() => {this.vote('up', issue)}}><img src={thumbsUp} alt="upvote" /><span>{issue.upvotes || 0}</span></a>
                            <a className="thumb" onClick={() => {this.vote('down', issue)}}><img src={thumbsDown} alt="downvote" /><span>{issue.downvotes || 0}</span></a>
                        </div>
                    </div>
                    
                </div>
                <div>
                    <h4>Comments:</h4>
                    <Comments currIssue={issue}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        issues: state.issues
    }
}

export default connect(mapStateToProps, { updateIssue })(Issue);
