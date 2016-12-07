var path = require('path');
function randomFunction(){
	var path = __dirname + '/bundle';
	console.log(path)
	return path;
}
module.exports = {
	entry: ['./src/index.js'],
	output: {
		path: __dirname,
		publicPath: '/',
		filname: 'bundle.js'
	},
	module: {
		loaders: [{
			exclude: '/node_modules/',
			loader: 'babel'	
		},  { test: /\.(png|jpg|jpeg|gif|woff)$/, loader: 'url-loader?limit=8192' }]
	},
	resolve: {
		root: path.resolve(__dirname),
		alias: {
			helpers: 'src/helpers',
			components: 'src/components',
			sayHello: 'src/helpers/sayHello'
		},
		extensions: ['','.js','.jsx']
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	}
};