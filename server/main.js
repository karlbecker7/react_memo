import express from 'express';
import path from 'path';

import mongoose from 'mongoose';
import session from 'express-session';

import api from './routes';

//if development environment, turn on Dev Server
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
const devPort = 4000;



const app = express();
const port = 3000;



app.use('/', express.static( path.join(__dirname, './../public') ));

app.use('/api', api);


/* support client-side routing */
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
});


app.get('/hello', (req,res)=>{
	return res.send('Hellsvvv');
})


/* mongodb connection */
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', ()=>{console.log('Connected to mongodb server');});
mongoose.connect('mongodb://localhost/codelab');

/* use session */
app.use(session({
    secret: 'CodeLab1$1$234',
    resave: false,
    saveUninitialized: true
}));

/* handle error */
app.use( function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Something broke!');
} )

app.listen(port, ()=>{
	console.log('listeing', port);
})


//if development environment, turn on Dev Server
if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');
    const config = require('../webpack.dev.config');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(
        devPort, () => {
            console.log('webpack-dev-server is listening on port', devPort);
        }
    );
}