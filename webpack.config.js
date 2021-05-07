const path = require('path'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    Autoprefixer = require('autoprefixer'),
    PostcssCustomProperties = require('postcss-custom-properties'),
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
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
              loader: MiniCssExtractPlugin.loader,
              options: {
                  publicPath: '/dist/css/',
              }
          },
          {
              loader: 'css-loader',
              options: {
                  url: false,
                  importLoaders: 1,
                  sourceMap: true
              }
          },
          {
              loader: 'postcss-loader',
              options: {
                  autoprefixer: {
                      browser: [ 'last 2 versions' ]
                  },
                  soruceMarp: true,
                  // plugins: () => [ autoprefixer ]
                  plugins: () => [ Autoprefixer, PostcssCustomProperties ]
              }
          },
          {
              loader: 'sass-loader',
              options: {
                  sourceMap: true
              }
          }
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: ['./modules', 'node_modules' ]

  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/main.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
  }),
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
