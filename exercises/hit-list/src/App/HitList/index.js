import React, { Component } from 'react';
import axios from 'axios';
import Person from './Person';
import './index.css';

const hitListUrl = 'http://api.vschool.io:6543/hitlist.json';


class HitList extends Component {
    constructor(props){
        super(props);
        this.state = {
            people: [],
            loading: true,
            err: false,
            errMsg: ''
        }
    }

    componentDidMount() {
        axios.get(hitListUrl)
            .then((response) => {
                this.setState({
                    people: response.data,
                    loading: false
                });
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    loading: false,
                    err: true,
                    errMsg: err.message
                });
            });
    }

    render() {
        let { people, loading, err, errMsg } = this.state;
        console.log(people);
        return (
            loading ? 
            <div>Loading, please wait.</div>
            :
                err ?
                <div>
                    <p>Your data could not be retrieved at this time.</p>
                    <p>{errMsg}</p>
                </div>
                :
                <div className='hitlist-wrapper'>
                    {people.map((person, index) => {
                        let style = {backgroundImage: `url(${person.image})`}
                        return <Person style={style} {...person} key={index}></Person>
                    })}
                </div>
        )
    }
}

export default HitList;