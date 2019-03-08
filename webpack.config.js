const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: './app.html',
    filename: './index.html'
  });

module.exports = {
    entry: {
        'index.js': [
            path.resolve(__dirname, 'app-front.js')
        ]
    },
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: {loader: 'html-loader'}
            }
        ]
    },
    plugins: [htmlWebpackPlugin]
};