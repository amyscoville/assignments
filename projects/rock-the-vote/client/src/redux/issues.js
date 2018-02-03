import axios from 'axios';

const issuesUrl = '/issues';

const issuesReducer = (state={data: [], loading: true}, action) => {
    switch (action.type) {
        case 'GET_ISSUES':
            return {
                data: action.issues,
                loading: false
            };
        case 'ADD_ISSUE':
            return {
                ...state,
                data: [...state.data, action.newIssue]
            };
        case 'UPDATE_ISSUE':
            let newData = state.data;
            for(let i = 0; i < newData.length; i++) {
                if(action.updatedIssue._id === newData[i]._id) {
                    newData[i] = Object.assign(newData[i], action.updatedIssue);
                }
            }
            return {
                ...state,
                data: newData
            }
        default:
            return state;
    }
}

export function getIssues() {
    return function(dispatch) {
        axios.get(issuesUrl)
            .then(response => {
                dispatch({
                    type: 'GET_ISSUES',
                    issues: response.data
                });
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export function addIssue(newIssue) {
    newIssue.upvotes = 0;
    newIssue.downvotes = 0;
    newIssue.totalVotes = 0;
    return function(dispatch) {
        axios.post(issuesUrl, newIssue)
            .then(response => {
                dispatch({
                    type: 'ADD_ISSUE',
                    newIssue: response.data
                })
            })
            .catch(err => {
                console.error(err);
            });
    }
}

export function updateIssue(updatedIssue) {
    return function(dispatch) {
        axios.put(issuesUrl + '/' + updatedIssue._id, updatedIssue)
            .then(response => {
                dispatch({
                    type: 'UPDATE_ISSUE',
                    updatedIssue: response.data
                });
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export default issuesReducer;