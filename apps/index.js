require('es6-promise').polyfill();
require('isomorphic-fetch');
Object.assign = require('object-assign');

import React, { Component, PropTypes } from 'react';

import { render } from 'react-dom';
import Index from '../views/index';

const wrap = document.createElement('div');
document.body.appendChild(wrap);

render(<Index/>, wrap);
