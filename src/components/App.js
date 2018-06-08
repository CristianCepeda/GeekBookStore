import React, { Component } from 'react';

import HeaderNav from './HeaderNav';
import DisplayBook from './DisplayBook';

import scarlet from './scarlet.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderNav />
        <main>
          <div className="container">
            <p>Images should go here</p>

            <img src={require("./scarlet.jpg")} />
            <p>The List of Top 20 Books from BBN</p>
            {this.props.books.map(book =>
              <DisplayBook {...book}/>
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
