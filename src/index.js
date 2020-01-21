import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import appStore from './store/store'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={appStore}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
