import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../../../redux/country.js';
import './Country.css';



class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        let code = this.props.match.params.alpha2Code;
        this.props.getCountry(code);
    }

    componentWillReceiveProps() {
        this.setState({
            loading: false
        })
    }

//Possible idea for individual country pages: Have clipart representing 
// the different facts (coins for currency, etc) and when the user clicks on the 
// clipart, the information appears

    render() {
        let { country } = this.props;
        let { loading } = this.state;
        return (
            !loading ?
                <div>
                    <h1>{country.name}</h1>
                    <h2>The capital city is {country.capital}</h2>
                    <h2>{country.name} is in {country.region}</h2>
                    <h2>{country.population.toLocaleString()} people live in {country.name}</h2>
                    <div>
                        {country.currencies.map((currency, index) => {
                            return <span key={currency.name + index}>{currency.name}</span>
                        })} 
                    </div>
                    <h2>This is {country.name}'s flag:</h2>
                    <img src={country.flag} className='flag' />
                </div>
                :
                <div>...LOADING</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        country: state.country
    }
}

export default connect(mapStateToProps, { getCountry })(Country);
