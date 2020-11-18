import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux';

ReactDOM.render(

    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,

    document.getElementById('root'),

);

reportWebVitals();
