import axios from 'axios';

const countriesUrl = 'https://restcountries.eu/rest/v2/all';

const countriesReducer = (countries=[],  action) => {
    switch (action.type) {
        case 'GET_COUNTRIES':
            return action.countries;
        default:
            return countries;
    }
}

export function getCountries() {
    return function(dispatch) {
        axios.get(countriesUrl)
            .then(response => {
                dispatch({
                    type: 'GET_COUNTRIES',
                    countries: response.data
                })
            })
            .catch(err => {
                console.error(err);
            })
    }
}

export default countriesReducer;