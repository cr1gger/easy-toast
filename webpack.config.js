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
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: './', name: 'style.min.css'}
                    },
                    'sass-loader'
                ]
            }

        ],
    },
};
