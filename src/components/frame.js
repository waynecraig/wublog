/**
 * html page wrapper
 */

const React = require('react')

const Frame = React.createClass({

	propTypes: {
		title: React.PropTypes.string,
		scripts: React.PropTypes.array.isRequired
	},
	
	getDefaultProps: function() {
		return {
			title: 'wublog',
			scripts: []
		};
	},

	render: function(){

		return (
			<html>
				<head>
					<meta charSet="utf-8"/>
					<title>{this.props.title}</title>
				</head>
				<body>
					{ this.props.children } 
					{ this.props.scripts.map(function(script){
						<script src={script}></script>
					}) }
                    <script src="./js/style.js"></script>
				</body>
			</html>
		)

	}

});

module.exports = Frame;
