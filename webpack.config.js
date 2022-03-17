const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: "./src/index.js", // Dẫn tới file index.js ta đã tạo
    output: {
        path: path.join(__dirname, "/build"), // Thư mục chứa file được build ra
        filename: "bundle.js" // Tên file được build ra
    },
    module: {
        rules: [

            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(pdf|jpg|jpeg|png|gif|svg|ico)$/,
                use: [
                    {
                        loader: 'url-loader'
                    },
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    // Chứa các plugins sẽ cài đặt trong tương lai
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};
