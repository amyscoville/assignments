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

    render() {
        let { country } = this.props;
        let { loading } = this.state;
        return (
            !loading ?
                <div className='country-wrapper'>
                    <h1 className='name'>{country.name}</h1>
                    <h2 className='capital'>The capital city is {country.capital}</h2>
                    <h2 className='region'>{country.name} is in the region of {country.region}</h2>
                    <h2 className='population'>{country.population.toLocaleString()} people live in {country.name}</h2>
                    <div className='currencies'>
                        {country.currencies.map((currency, index) => {
                            return <span key={currency.name + index}>{currency.name}</span>
                        })} 
                    </div>
                    <img src={country.flag} className='flag' />
                    <h2>This is {country.name}'s flag</h2>
                    
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
