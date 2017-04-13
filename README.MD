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

## Run

```
npm run build
npm run start / npm run development
```

Server runs on port 3000.
