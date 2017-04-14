var webpack = require('webpack');
 
module.exports = {
	
	/* when running webpack-dev-server with javascript not console,
	for using HotReloadingModule, it is needed to insert dev-server client
	and hot module to entry.
	*/
  
    entry: [
        './src/index.js',
        'webpack-dev-server/client?http://0.0.0.0:4000', // The port on the development server must be entered in this section to work properly
        'webpack/hot/only-dev-server'
    ],
 
    output: {
        path: '/', // "/" not "public", it stores files in memory to be used.
        filename: 'bundle.js'
    },
 
    // dev server settings
    devServer: {
        hot: true,
        filename: 'bundle.js',
        publicPath: '/',
        historyApiFallback: true,
        contentBase: './public',
		/* all requests are proxied to receive the response,
		if it is bundle file, program use script of dev server. */
        proxy: {
            "**": "http://localhost:3000" // express server address
        },
        stats: {
          // minimize console log
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false
        }
    },
 
 
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
 
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })],
                exclude: /node_modules/,
            }
        ]
    }
 
 
};