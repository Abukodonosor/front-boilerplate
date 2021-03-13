const path = require('path') // resolve path
const HtmlWebpackPlugin = require('html-webpack-plugin') // create file.html
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // extract css to files
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') // minify css
const TerserPlugin = require('terser-webpack-plugin') // minify js
const autoprefixer = require('autoprefixer') // help tailwindcss to work
const ImageminPlugin = require('imagemin-webpack-plugin').default // minimize images
const imageminMozjpeg = require('imagemin-mozjpeg') // minimize images
require("@babel/polyfill");

module.exports = {
	mode: 'development',
	devtool: 'eval-cheap-source-map',
	watch: true,
	watchOptions: {
		aggregateTimeout: 1500,
		ignored: ['node_modules'],
		poll: 1000
	},
	devServer: {
		contentBase: path.join(__dirname, 'prod'),
		port: 9000,
		hot: true,
		compress: true,
		watchContentBase: true,
		historyApiFallback: true
	},

	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'] // import without .ts or .tsx etc....
	},
	// Async operations loader @babel/polifill
	entry: {
		index: ["@babel/polyfill", path.join(__dirname, 'src/index.tsx')]
	},

	output: {
		publicPath: '',
		path: path.resolve(__dirname, 'prod'),
		filename: '[name].[hash].bundle.js' // for production use [contenthash], for developement use [hash]
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: '[name].[contenthash].css', chunkFilename: '[id].[contenthash].css' }),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './index.html')
		}),
		new ImageminPlugin({
			// minimize images
			pngquant: { quality: [0.5, 0.5] },
			plugins: [imageminMozjpeg({ quality: 50 })]
		})
	],

	optimization: {
		minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin({})],

		moduleIds: 'deterministic',
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	},

	module: {
		rules: [
			{
				test: /\.(css|scss|sass)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/i,
				use: ['file-loader']
			},
			{
				test: /\.html$/,
				use: [{ loader: 'html-loader' }]
			},
			// Async operations loader
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /(node_modules|bower_components|prod)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
					}
				}
			}
		]
	}
}
