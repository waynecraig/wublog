const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

const WATCH = !!process.env.watch;
const EXPLUGINS = process.env.compress ? [
    new DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    }),
    new UglifyJsPlugin({compress:{warnings:false}})
] : [];


module.exports = {

    entry: {
        index: './apps/index.js',
        account: './apps/account.js'
    },

    output: {
        path: './static',
        filename: '[name].js',
        sourceMapFilename: '[name].map'
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
        new CommonsChunkPlugin({name:'common'})
    ].concat(EXPLUGINS),

    devtool: 'source-map',

    watch: WATCH
}
