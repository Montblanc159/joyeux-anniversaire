const path = require('path');
module.exports = {
    entry: './src/scripts/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        extensionAlias: {
            '.js': ['.js', '.ts'],
        },
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public')
    },
    mode: 'development'
};
