import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

/* Pages */
<<<<<<< HEAD
import SignUp from './SignUp';
=======
import SignIn from './SignIn';
>>>>>>> cristian-cepeda
/* Components */
import HeaderNav from './HeaderNav';
import DisplayBook from './DisplayBook';
import FooterSection from './FooterSection';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderNav />
          <Switch>
<<<<<<< HEAD
            <Route path="/signup" component={SignUp}/>
=======
            <Route path="/signin" component={SignIn}/>
>>>>>>> cristian-cepeda
            <Route exact path="/" render={(props) =>(
              /*The Main Part Of the Website should go inside of <main></main> */
              <main>
                <div className="container">
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
