import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../../../redux/country.js';

import GoogleApiWrapper from './MapContainer';
import './Country.css';



class Country extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
        this.toCurrencyString = this.toCurrencyString.bind(this);
        this.toLanguageString = this.toLanguageString.bind(this);
        this.capitalCity = this.capitalCity.bind(this);
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

    toCurrencyString(currencies, countryName) {
        let currStr = `People in ${countryName} use `;
        if (currencies.length === 1) {
            currStr += `the ${currencies[0].name} to buy things.`;
        } else if(currencies.length === 2) {
            currStr += `the ${currencies[0].name} and the ${currencies[1].name} to buy things.`;
        } else if(currencies.length > 2) {
            for(let i = 0; i < currencies.length; i++) {
                if (i === currencies.length - 1) {
                    currStr += ` and the ${currencies[i].name} to buy things.`;
                } else if (i < currencies.length - 1) {
                    currStr += `the ${currencies[i].name}, `;
                }
 
            }
        } 
        return currStr;
    }

    toLanguageString(languages, countryName) {
        let langStr = `People in ${countryName} speak `;
        if (languages.length === 1) {
            langStr += `${languages[0].name}.`;
        } else if(languages.length === 2) {
            langStr += `${languages[0].name} and ${languages[1].name}.`;
        } else if(languages.length > 2) {
            for(let i = 0; i < languages.length; i++) {
                if (i === languages.length - 1) {
                    langStr += ` and ${languages[i].name}.`;
                } else if (i < languages.length - 1){
                    langStr += `${languages[i].name}, `;
                }
            }
        } 
        return langStr;
    }

    capitalCity(capital, countryName) {
        if(capital) {
            return `The capital of ${countryName} is ${capital}`
        } else {
            return `There is no capital city in ${countryName}!`
        }
    }

    render() {
        let { country } = this.props;
        let { loading } = this.state;
        let disabled = this.state.disabled ? 'disabled' : null;
        return (

            !loading ?
                <div className='country-wrapper'>
                    <h1 className='area name'>{country.name}</h1>
                    <div className='img-area flag-img'>
                        <img src={country.flag} className='flag' />
                        <p className='flag-text'>This is {country.name}'s flag &#11014;</p>
                    </div>
                    <div className='text-area stats'>
                        <p className='population'><span className='start'>&#9733; </span>{country.population.toLocaleString()} people live in {country.name}.</p>
                        <p className='currencies'><span className='start'>&#9733; </span>{this.toCurrencyString(country.currencies, country.name)}</p>
                        <p className='languages'><span className='start'>&#9733; </span>{this.toLanguageString(country.languages, country.name)}</p>
                    </div>
                    <div className='text-area capital-region'>
                        <p className='capital'><span className='start'>&#9733; </span>{this.capitalCity(country.capital, country.name)}.</p>
                        <p className='region'><span className='start'>&#9733; </span>{country.name} is in the region of {country.region}.</p>
                    </div>
                    <div className='img-area map-wrap'>
                        <GoogleApiWrapper latlng={country.latlng}></GoogleApiWrapper>
                    </div>
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
