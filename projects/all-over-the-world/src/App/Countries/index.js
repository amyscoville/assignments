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
        let style = {backgroundImage: `url(${map})`, backgroundPosition: 'center', backgroundSize: '75%'}
        return (
            <div style={style}>
                <ul className='countries-wrapper'>
                    {countries.map((country, index) => {
                        return <Link to={`/countries/${country.alpha2Code}`} key={index + country.name} className='country-links'>{country.name}</Link>
                    })}
                </ul>
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