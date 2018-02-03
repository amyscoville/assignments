import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateIssue } from '../../../../../redux/issues';

import './Comments.css';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitComment = this.submitComment.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }

    handleChange(e) {
        let { value } = e.target;
        this.setState({
            comment: value
        });
    }

    clearInput() {
        this.setState({
            comment: ''
        })
    }

    submitComment(e) {
        e.preventDefault();
        let { currIssue } = this.props;
        let { comment } = this.state;
        currIssue.comments.push(comment);
        this.props.updateIssue(currIssue);
        this.clearInput();
    }

    deleteComment(comment) {
        let { currIssue } = this.props;
        for(let i = 0; i < currIssue.comments.length; i++) {
            if(currIssue.comments[i] === comment) {
                currIssue.comments.splice(i, 1);
                break;
            }
        }
        this.props.updateIssue(currIssue);
    }

    render() {
        return (
            <div>
                <div className="comments-display">
                    {this.props.currIssue.comments.map((comment, index) => {
                        return (
                            <div className="single-comment"key={index}>
                                <div className="comment-text">{comment}</div>
                                <button className="delete-comment" onClick={() => {this.deleteComment(comment)}}>X</button>
                            </div>
                        );
                    })}
                </div>
                <form className="comment-form"onSubmit={this.submitComment}>
                    <textarea className="comment-box"onChange={this.handleChange} type="text" value={this.state.comment} placeholder="Comment here. Please be nice!" />
                    <button className="post-comment">post</button>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        issues: state.issues
    }
}

export default connect(mapStateToProps, { updateIssue })(Comments);