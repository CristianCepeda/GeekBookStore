//fetch data from api

import React from 'react';
import {renderToString} from 'react-dom/server';
//import {StaticRouter} from 'react-router-dom';
import App from './src/components/App';
import config from './config';
import axios from 'axios';

{/*const context ={};*/}
const serverRender = () =>
  axios.get(`${config.serverUrl}/api/books`)
    .then(resp => {
      return{
        initialMarkup: renderToString(
           <App initialBooks = {resp.data.books} />),
           initialData: resp.data
      };
});

export default serverRender;
