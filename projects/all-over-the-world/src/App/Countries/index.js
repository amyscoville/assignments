import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountries } from '../../redux/countries.js';
import Country from './Country';

import './Countries.css'

import map from './colorful-map.png';

class Countries extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCountries();
    }

    render() {
        let { countries } = this.props;
        let style = {backgroundImage: `url(${map})`, backgroundPosition: 'center', backgroundSize: '85%', backgroundAttachment: 'fixed'}
        return (
            <div style={style} className='main-countries-wrapper'>
                <div className='layer'>
                    <h1 className='click-country'>Click on a country to learn more about it!</h1>
                    <ul className='countries-wrapper'>
                        {countries.map((country, index) => {
                            return (
                                <li className='country-links'>
                                    <Link to={`/countries/${country.alpha2Code}`} key={index + country.name} className='link-text'>{country.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        countries: state.countries 
    }
}

export default connect(mapStateToProps, { getCountries })(Countries);