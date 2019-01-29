const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

const BUILD_DIR = path.normalize(path.resolve(__dirname, '..', 'build'));
const APP_DIR = path.normalize(path.resolve(__dirname, '..', 'src'));
__webpack_public_path__ = `${APP_DIR}/public`;

console.log(APP_DIR)

module.exports = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    publicPath: `/`,
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loaders: ['react-hot', 'babel'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass'],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]'
          }
        }],
        loaders: ['url-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
  },
  plugins: [
    new ManifestPlugin({ fileName: 'build-manifest.json' }),
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(`${APP_DIR}/public`)
    })
  ]
};
