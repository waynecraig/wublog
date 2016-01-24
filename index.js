"use strict";
const app = require('koa')();
const router = require('koa-router')();
const React = require('react');
const render = require('react-dom/server').renderToString;
const Login = require('./components/login.js');

router.get('/cgi', function *(){
	this.body = 'ok'
});

router.get('/login', function *(){

	const html = render(React.createElement(Login, null), null);

	this.body = html;

});

app
	.use(router.routes())
	.use(router.allowedMethods())
	.listen(6789);
