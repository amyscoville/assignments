import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';

ReactDOM.render(
    // remember to add state to provider when state is defined
    <Provider> 
        <App />
    </Provider>,
    document.getElementById('root')
);