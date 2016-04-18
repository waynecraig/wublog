require('es6-promise').polyfill();
require('isomorphic-fetch');
Object.assign = require('object-assign');

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from '../reducers/account'
import App from '../views/account';

const loggerMiddleware = createLogger()

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
)

const wrap = document.createElement('div');
document.body.appendChild(wrap);

render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    wrap
);
