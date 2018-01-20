import axios from 'axios';

const countryUrl = 'https://restcountries.eu/rest/v2/alpha/';

const countryReducer = (country=null, action) => {
    switch (action.type) {
        case 'GET_COUNTRY':
            return action.country
        default:
            return country;
    }
}

export function getCountry(code) {
    return function(dispatch) {
        axios.get(countryUrl + code)
            .then(response => {
                dispatch({
                    type: 'GET_COUNTRY',
                    country: response.data
                });
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export default countryReducer;