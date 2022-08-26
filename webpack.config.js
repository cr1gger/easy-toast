const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'easy-toast.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    }
};
