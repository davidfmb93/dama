const path = require('path'),
    miniCssExtractPlugin = require('mini-css-extract-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
  entry: './modules/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use:  [ 'ts-loader'], // aca quede "sass-loader"   "style-loader", "css-loader"
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['./modules' ]

  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // new miniCssExtractPlugin({
    //     filename: 'css/main.css'
    // }),
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        files: ['./dist/*.html', './dist/css/*.css', './dist/*.js'],
        server: { baseDir: ['dist'] }
    }),
    // new JavaScriptObfuscator ({
    //     rotateUnicodeArray: true
    // })
]


  
};