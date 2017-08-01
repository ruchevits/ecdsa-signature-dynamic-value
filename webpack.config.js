module.exports = {
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	},
	entry: './src/index.js',
	output: {
		path: './',
		filename: 'EcdsaSignatureDynamicValue.js'
	}
 }
