# React-Memo Fundamentals

PART 1

1. Express & React.js Settings
 - Install Global Dependency
 npm install -g webpack webpack-dev-server
 npm install -g babel-cli nodemon cross-env
 - Install Local Dependency
 npm install --save express body-parser
 - Modify NPM script ( package.json)
 - Make config js for webpack dev server (webpack.dev.config.js)
 - Modify webpack.config.js

2. Install MongoDB

3. Install Middleware and Other Modules
 - Install Module and Apply 1
 npm install --save morgan body-parser
 - Install Module and Apply 2
 npm install --save mongoose express-session

4. Implement Account Authentication
 - Create Account Router
 - Create API Route Router
 - Modeling Account by Mongoose
 - Install bcryptjs hash module
 npm install --save bcryptjs
 - Apply bcryptjs to Account password
 - Implement Account API
 signup, signin, getInfo, logout
 - Handle Express Error

5. Implement Memo API
 - Modeling Memo by Mongoose
 - Implement Memo API
 write memo, read memo, delete memo, modify memo

PART 2

6. In Webpack, addtional settings & install necessary modules for clientside
 - set resolve in webpack
	resolve: {
		root: path.resolve('./src')
	}
 - install module
	npm install --save axios react-addons-update react-router react-timeago redux react-redux redux-thunk
 - install css-loader & style-loader in webpack
	npm install --save-dev style-loader css-loader
	set settings in webpack for css
		module: {
			loaders: [
			    {
			       /* ... */
			    },
			    {
				test: /\.css$/,
				loader: 'style!css-loader'
			    }
			]
		    },
 - create sytle.css in src directory
 - insert style.css into webpack entry(webpack.confg.js & webpack.dev.config.js)
    entry: [
        './src/index.js',
        './src/style.css'
    ],

7. Understanding React Project
	src
	├── actions
	│   ├── ActionTypes.js
	│   ├── authentication.js
	│   ├── index.js
	│   ├── memo.js
	│   └── search.js
	├── components
	│   ├── Authentication.js
	│   ├── Header.js
	│   ├── index.js
	│   ├── Memo.js
	│   ├── MemoList.js
	│   ├── Search.js
	│   └── Write.js
	├── containers
	│   ├── App.js
	│   ├── Home.js
	│   ├── index.js
	│   ├── Login.js
	│   ├── Register.js
	│   └── Wall.js
	├── index.js
	└── reducers
	    ├── authentication.js
	    ├── index.js
	    ├── memo.js
	    └── search.js

8. Materializecss (http://materializecss.com/)
 - Fetching the materialzecss files in index.html
	<!--Import Google Icon Font-->
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<!--Import materialize.css-->
	<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css"  media="screen,projection"/ />

	<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>

9. Make Header
 - making express server understand the client routing (server/main.js)
	app.use('/api', api);
	...
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, './../public/index.html'));
	});

## Run

```
npm run build
npm run start / npm run development
```

Server runs on port 3000.
