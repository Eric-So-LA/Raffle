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
		}]
	},
	resolve: {
		extensions: ['','.js','.jsx']
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	}
};