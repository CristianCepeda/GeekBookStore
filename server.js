import config from './config';
import apiRouter from './api';

import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import express from 'express';
const server = express();

/*  This should look something like this
    __dirname + '/sass'
    which will look for that sass folder in the current directory and then
    the folder sass. Same would go with destination. */
server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

/* Use EJS to server render our javascript front end components*/
server.set('view engine', 'ejs');

/* It exposes an API to listen to certain routes. We do a server .get specifying
the route we're interested in as the first argument. The second argument is the
event handler, similar to an HTTP module, receives both a request and a
response object.

The response.render() method is used to render or ejs template from the view
folder */
server.get('/', (req, res) => {
  res.render('index', {
    content: 'This is content from server.js'
  });
});

/* This is using our index.js file inside the api folder */
server.use('/', apiRouter);

/* Side note -- We should manage static assets separately from the node server,
we could use instead NGINX

This is express static middleware that we can use to automatically serve
static assets. This means any file found inside the public folder. Also it will
server the index.html on the root of that directory on a GET to '/'

- server.use() is just a way for us to register middleware on an application
level, because this object right here, server, is our web application.


- This is considered application-wide middleware*/
server.use(express.static('public'));

/* Instead of listening to a single request event, an express server also
handles server side routing for us. */
server.listen(config.port, () => {
  console.info('Express listening on port', config.port);
});
