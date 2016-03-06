"use strict";
const React = require('react');
const render = require('react-dom/server').renderToString;
const Frame = require('../components/frame');
const Login = require('../components/login');

module.exports = function (req, res) {

	const html = render(<Frame><Login/></Frame>);

	res.end(html);

};
