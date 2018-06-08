import config from './config';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import express from 'express';
const server = express();

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

/* Use EJS to server render our javascript front end components*/
server.set('view engine', 'ejs');

/* It exposes an API to listen to certain routes. We do a server .get specifying
the route we're interested in as the first argument. The second argument is the
event handler, similar to an HTTP module, receives bot a request and a
response object.
The response.render() method is used to render or ejs template from the view
folder */
server.get('/', (req, res) => {
  res.render('index', {
    content: 'This is content from server.js'
  });
});

/* Side note -- We should manage static assets separately from the node server,
we could use instead NGINX
This is express static middleware that we can use to automatically serve
static assets. This means any file found inside the public folder. */
server.use(express.static('public'));

/* Instead of listening to a single request event, an express server also
handles server side routing for us. */
server.listen(config.port, () => {
  console.info('Express listening on port', config.port);
});
