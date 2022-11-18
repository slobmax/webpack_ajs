const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'                                                            
            },
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]                
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',            
        }),        
        new MiniCSSExtractPlugin()
    ]
}