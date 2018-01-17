import React, { Component } from 'react';
import { connect } from 'react-redux';

import { tick, reset } from '../../Redux/timer.js';

import Display from './Display';
import './Timer.css';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: null
        }
        this.startInterval = this.startInterval.bind(this);
        this.stopInterval = this.stopInterval.bind(this);
    }

    startInterval() {
        if (this.state.counter === null) {
            this.setState({
                counter: setInterval(this.props.tick, 10)
            });
        }
    }

    stopInterval() {
        clearInterval(this.state.counter);
        this.setState({
            counter: null
        });
    }

    displayTime() {
        let { timer } = this.props;
        let time = new Date(timer);
        let mils = time.getMilliseconds() / 10;
        mils < 10 ? mils = "0" + String(mils) : null;
        let secs = time.getSeconds();
        secs < 10 ? secs = "0" + String(secs) : null;
        let mins = time.getMinutes();
        mins < 10 ? mins = "0" + String(mins) : null;
        return [
            <p className='display-section'>{mins}</p>,
            <p className='colon'>:</p>,
            <p className='display-section'>{secs}</p>,
            <p className='colon'>:</p>,
            <p className='display-section'>{mils}</p>
            ]
    }

    render() {
        return (
            <div className='timer-wrapper'>
                <div className='timer-display'>{this.displayTime()}</div>
                <div className='buttons-wrapper'>
                    <button className='button' onClick={this.startInterval}>start</button>
                    <button className='button' onClick={this.stopInterval}>stop</button>
                    <button className='button' onClick={this.props.reset}>reset</button>
                </div>
            </div>
        );
    }
}

export default connect(state => state, { tick, reset })(Timer);

// const howToConnect = (state) => {
//     return state.timer;
// }
// const customConnect = connect(howToConnect);
// const TimerConnectedToRedux = customConnect(Timer);
// export default TimerConnectedToRedux;