# All Over The World - React/Redux with API Integration

## Objectives

1) Build an educational website with a child-friendly interface. Help children become familiar with countries around the world.

2) Meet the following assignment requirements:
  * Online API integration
  * 3 page views using React Router
  * Responsive

### Homepage
![homepage](public/images/home.png)
### Countries
![list of countries](public/images/countries.png)
### Individual Country Page
![alt text](public/images/country.png)
### About Page
![alt text](public/images/about.png)

## Technologies Used
* React
* JavaScript
* HTML
* CSS
* React Router
* Redux
* AJAX
* Axios + Thunk

## Wireframes
<img src="public/images/homepage-wireframe.jpg" width="300" height="150"> <img src="public/images/countries-wireframe.jpg" width="300" height="150">
<img src="public/images/country-wireframe.jpg" width="300" height="150"> <img src="public/images/about-wireframe.jpg" width="300" height="150">

## Code Snippets

Although Redux is generally unnecessary for applications of this size, I chose to use Redux and Thunk here to solidify my understanding of the concepts in preparation for larger applications in the future. API requests are made in Redux, applying Thunk as middleware. :

```
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
```

Functions making API requests in Redux are made available as props through the React-Redux connect() method. They are called from individual components in the life cycle method componentDidMount().

```
componentDidMount() {
        this.props.getCountries();
    }
```


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
