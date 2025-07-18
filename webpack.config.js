const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
// Load .env file variables into process.env
dotenv.config();
const { tanstackRouter } = require('@tanstack/router-plugin/webpack')

const entryjs = {
  tailwind: path.resolve(__dirname, 'controllers/client/css/tailwind.css'),
  universal: path.resolve(__dirname, 'controllers/client/css/universal.css'),
  animation: path.resolve(__dirname, 'controllers/client/css/animation.css'),
  main: path.resolve(__dirname, 'controllers/client/css/main.css'),
  admin: path.resolve(__dirname, 'controllers/client/css/admin.css'),
  template: path.resolve(__dirname, 'controllers/client/css/template.css'),
  prevjs: path.resolve(__dirname, 'controllers/client/src/prev.js'),
  checkoutjs: path.resolve(__dirname, 'controllers/client/src/dist/checkout/checkout.js'),
  userjs: path.resolve(__dirname, 'controllers/client/src/dist/user/user.js'),
  adminjs: path.resolve(__dirname, 'controllers/client/src/dist/admin/admin.js'),
  adminDefaultjs: path.resolve(__dirname, 'controllers/client/src/dist/default/admin.js'),
  templatejs: path.resolve(__dirname, 'controllers/client/src/dist/template/template.js'),
  signupjs: path.resolve(__dirname, 'controllers/client/src/dist/signup/signup.js'),
  aicjs: path.resolve(__dirname, 'controllers/client/src/dist/aic/aic.js'),
  index: path.resolve(__dirname, 'controllers/client/src/dist/index/index.js'),
}
const entryHtml = {
  "index.php": "controllers/index/index.php",
  "404.php": "controllers/404/404.php",
  "deactivate.php": "controllers/deactivate/deactivate.php",
  "aic.php": "controllers/aic/aic.php",
  "expire.php": "controllers/expire/expire.php",
  "forgot.php": "controllers/forgot/forgot.php",
  "forgotUsername.php": "controllers/forgotUsername/forgotUsername.php",
  "resetPass.php": "controllers/resetPass/resetPass.php",
  "restore.php": "controllers/restore/restore.php",
  "signin.php": "controllers/signin/signin.php",
  "signup.php": "controllers/signup/signup.php",
  "template.php": "controllers/template/template.php",
  "terms.php": "controllers/terms/terms.php",
  "user.php": "controllers/user/user.php",
  "userDefault.php": "controllers/default/userDefault.php",
  "userTemplate.php": "controllers/user/userTemplate.php",
  "admin.php": "controllers/admin/admin.php",
  "adminDefault.php": "controllers/default/adminDefault.php",
  "adminTemplate.php": "controllers/admin/adminTemplate.php",
  "checkout.php": "controllers/checkout/checkout.php",
  "return.php": "controllers/checkout/return.php"
}

const entryChunks = {
  "index.php": ['tailwind', 'universal', 'main', 'animation', 'index'],
  "404.php": ['tailwind', 'universal', 'main'],
  "deactivate.php": ['tailwind', 'universal'],
  "aic.php": ['tailwind', 'aicjs', 'prevjs', 'universal', 'main'],
  "expire.php": ['tailwind', 'universal', 'main'],
  "forgot.php": ['tailwind', 'prevjs', 'universal', 'main'],
  "forgotUsername.php": ['tailwind', 'prevjs', 'universal', 'main'],
  "resetPass.php": ['tailwind', 'prevjs', 'universal', 'main'],
  "restore.php": ['tailwind', 'universal', 'main'],
  "signin.php": ['tailwind', 'prevjs', 'universal', 'main'],
  "signup.php": ['tailwind', 'signupjs', 'prevjs', 'universal', 'main'],
  "template.php": ['tailwind', 'templatejs', 'template', 'universal'],
  "terms.php": ['tailwind', 'universal'],
  "user.php": [],
  "userDefault.php": ['userjs'],
  "userTemplate.php": ['tailwind', 'userjs', 'universal', 'admin'],
  "admin.php": [],
  "adminDefault.php": ['adminDefaultjs', 'tailwind', 'universal'],
  "adminTemplate.php": ['tailwind', 'adminjs', 'universal', 'admin'],
  "checkout.php": ['tailwind', 'checkoutjs', 'universal'],
  "return.php": ['tailwind', 'checkoutjs', 'universal']
}
const htmlEntry = [];
for(const key in entryHtml) {
  htmlEntry.push(new htmlWebpackPlugin({
    template: entryHtml[key],
    filename: key,
    chunks: entryChunks[key],
    publicPath: '/dist/',
    minify: {
      collapseWhitespace: true
    },
    scriptLoading: 'blocking',
    inject: 'head'
  }))
}

// htmlEntry.push(
//   new htmlWebpackPlugin({
//     template: "controllers/checkout/checkout.php",
//     filename: "checkout.php",
//     scriptLoading: 'defer',
//     minify: {
//       collapseWhitespace: true
//     },
//     chunks: ["tailwind", "universal", "checkoutjs"],
//     publicPath: '/dist',
//     inject: 'head'
//   })
// )

htmlEntry.push(
  new webpack.ProvidePlugin({
      process: 'process/browser.js'
  })
)

htmlEntry.push(
  new webpack.DefinePlugin({
    'process.env': JSON.stringify({
      NODE_ENV: process.env.NODE_ENV,
      // Add other environment variables you need
      STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
      SYSTEM_SECRET_KEY: process.env.SYSTEM_SECRET_KEY
    }),
  }),
)
htmlEntry.push(
  tanstackRouter({
    target: 'react',
    autoCodeSplitting: true
  })
)

module.exports = {
    mode: 'development',
    entry: entryjs,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
    },
    devtool: 'source-map',
    plugins: htmlEntry,
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }, {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
              test: /\.module\.css$/,
              use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
      fallback: {
        "console": false
      }
    },
}