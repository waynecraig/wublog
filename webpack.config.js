var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

var WATCH = !!process.env.watch;

module.exports = {

    entry: {
        index: './apps/index.js',
        account: './apps/account.js'
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
        new HtmlWebpackPlugin({ 
            template: 'views/index.html',
            chunks: ['common', 'index'],
            title: '首页',
            hash: true,
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({ 
            template: 'views/index.html',
            chunks: ['common', 'account'],
            title: '账户管理',
            hash: true,
            filename: 'account.html'
        }),
        new UglifyJsPlugin({compress:{warnings:false}}),
        new CommonsChunkPlugin({name:'common'})
    ],

    watch: WATCH
}
