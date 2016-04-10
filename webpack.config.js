var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {

    entry: {
        vender: ['react', 'react-dom'],
        main: './js/main.js'
    },

    output: {
        path: './static',
        filename: '[name].js'
    },

    module: {
        loaders: [
			{
				test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel?presets[]=react,presets[]=es2015'
			}
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({ template: 'views/index.html' }),
        new UglifyJsPlugin({compress:{warnings:false}}),
        new CommonsChunkPlugin({name:'vender', filename: 'commons.js'})
    ],

    watch: false
}
