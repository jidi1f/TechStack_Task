let path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
    entry:['babel-polyfill','./src/main/main.js'],
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'styles.css',
          
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            "@babel/plugin-transform-react-jsx",
                            ["@babel/plugin-proposal-decorators", {"legacy": true}],
                            ["@babel/plugin-proposal-class-properties", {"loose": true}]
                        ]
                    }
                }
              },
              {
                test: /\.module\.scss$/,
                exclude: /node_modules/,
                use: [
                      {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          hmr: process.env.NODE_ENV === 'development'
                        },
                      },
                      {
                      loader: 'css-loader',
                      options: { 
                        modules:{
                          localIdentName: '[local]__[sha1:hash:hex:7]'
                        },
                        importLoaders:1,
                      }
                    },
                    {
                      loader: 'sass-loader',
                    }
                  ]
              },
              {
                test: /^((?!\.module).)*scss$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      hmr: process.env.NODE_ENV === 'development'
                    }
                  },
                  {
                    loader: 'css-loader'
                  },
                  {
                    loader: 'sass-loader'
                  }
                ]
              }
        ]
    },
    resolve: {

      extensions: ['.js', '.scss'],

      alias: {
        '~': path.resolve(__dirname, "src"),
        '~c': path.resolve(__dirname, "src/components"),
        '~p': path.resolve(__dirname, "src/pages"),
        '~s': path.resolve(__dirname, "src/store"),
      }
    },
    devServer:{
     historyApiFallback: true
    }
};

module.exports = conf;

