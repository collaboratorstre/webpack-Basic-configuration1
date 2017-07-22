var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	//context: ,//配置里面有这个一个属性，表示整个运行环境的上下文，
	//上下文环境的默认值其实就
	 //是我们运行这个脚本的目录
	entry: {
		main: './src/script/main.js',
		a: './src/script/a.js',
		b: './src/script/b.js',
		c: './src/script/b.js'
	},
	// entry: ['./src/script/main.js','./src/script/a.js'],
	output: {
		path: __dirname + '/dist',
		filename: 'js/[name]-[chunkhash].js',
		publicPath: 'http://cdn.com'//其实可以理解成是一个占位符，需要上线，
		//就会替换成你设置的这个开头的路径
	},
	plugins: [
       new htmlWebpackPlugin({
       //	filename: 'index-[hash].html', //指定我们生成的名称（filename）
       	filename: 'a.html',
       	template: 'index.html',
        inject: false, //指定想吧我们的脚本放在头部还是body标签里面
        title: 'this is a.html',
        excludeChunks: ['b','c'] //抛出哪些不加载
       }),//进行初始化
       new htmlWebpackPlugin({
	       	filename: 'b.html',
	       	template: 'index.html',
	        inject: false, 
	        title: 'this is b.html',
	         excludeChunks: ['a','c']
       }),
        new htmlWebpackPlugin({
	       	filename: 'c.html',
	       	template: 'index.html',
	        inject: false, 
	        title: 'this is c.html',
	         excludeChunks: ['a','b']
       })
	]
}