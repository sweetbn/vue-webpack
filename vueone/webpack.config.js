const htmlWebpackPlugin=require('html-webpack-plugin');
const path=require('path');
module.exports={
	entry:{
		main:'./src/main.js'
	},
	output:{
		filename:'./build.js',
		path:path.join(__dirname,'dist')
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.jpg|png|svg|gif/,
				loader:'url-loader?limit=4096&name=[name].[ext]',
			},
			{
				test:/\.js/,
				loader:'babel-loader',
				exclude:/node_modules/,
				options:{
					presets:['es2015'],
					plugins:['transform-runtime']
				}
			},
			{
				test:/\.vue$/,
				loader:'vue-loader'
			}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			template:'./src/index.html'
		})
	]
		
}