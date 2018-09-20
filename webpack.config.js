const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },

  module: {
    rules: [

      {
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      },
      {
            test: /\.html$/,
            loader: 'html-srcsets-loader',
            options: {
                attrs: ['img:src', ':srcset'],
                minimize: true,
                caseSensitive: true,
                removeAttributeQuotes:false,
                minifyJS:false,
                minifyCSS:false
            },
            exclude: ['./src/main/webapp/index.html']
        }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/index.html',
      filename: 'index.html'
    }),
<<<<<<< HEAD
    new UglifyJsPlugin(),

    new CleanWebpackPlugin(['dist'])
=======
    new HtmlWebpackPlugin({
      template: './src/blog.html',
      filename: 'blog.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/press.html',
      filename: 'press.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/company.html',
      filename: 'company.html'
    }),
    new UglifyJsPlugin(),
>>>>>>> ee28368fbad633c52e01281b6dc5fc7e3882cee5
  ]

};
