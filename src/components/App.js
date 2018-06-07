import React, { Component } from 'react';

import HeaderNav from './HeaderNav';
import DisplayBook from './DisplayBook';

class App extends Component {
  render() {
    return (
      <div className="container">
        <HeaderNav />
        <div className="d-flex p-2 bd-highlight">
          <p>The List of Top 20 Books from BBN</p>
          {this.props.books.map(book =>
            <DisplayBook {...book}/>
          )}
        </div>
      </div>
    );
  }
}

export default App;
