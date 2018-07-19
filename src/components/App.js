import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

/* Pages */
import bookPage from './bookPage'
import SignUp from './SignUp';
/* Components */
import HeaderNav from './HeaderNav';
import DisplayBook from './DisplayBook';
import FooterSection from './FooterSection';
//console.log("Connected successfully to server");

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderNav />
          <Switch>
            <Route path="/signup" component={SignUp}/>
            <Route path="/bookpage" component={bookPage}/>
            <Route exact path="/" render={(props) =>(
              /*The Main Part Of the Website should go inside of <main></main> */
              <main>
                <div className="container">
                  <Link to= "/bookpage"> <img src="https://i.imgur.com/oToUE4P.png" alt="Book image" width="100" height="150"/> </Link>
                  <p>Images should go here</p>
                  <p>The List of Top 20 Books from BBN</p>
                  {this.props.books.map(book =>
                    <DisplayBook {...book}/>
                  )}
                </div>
              </main>
              )} />
          </Switch>
          <FooterSection />
        </div>
      </Router>
    );
  }
}

export default App;
