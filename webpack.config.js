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
            // {
            //     test: /\.(ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             name: '[name].[ext]',
            //             outputPath: 'fonts/'
            //         }
            //     }]
            // },
            // WebPack 5 khong dung file loader cho mot so tai nguyen, phai doi sang kieu nay
            {
                test: /\.(woff(2)?|ttf|eot|svg)$/i,
                type: 'asset/resource',
                dependency: {not: ['url']},
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
