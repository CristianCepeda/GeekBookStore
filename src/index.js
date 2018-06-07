import React from 'react';
import ReactDOM from 'react-dom';

import data from './bookLibrary';
import App from './components/App';

ReactDOM.render(
  <App books={data.books} className="Website"/>,
  document.getElementById('root')
);
