import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

/* Pages */
import AboutPage from './About/AboutPage';
import AccountPage from './Account/AccountPage';
import ContactPage from './Contact/ContactPage';
import SignInPage from './SignIn/SignInPage';
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
            <Route path="/about" component={AboutPage} />
            <Route path="/account" component={AccountPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/auth/signin" component={SignInPage} />
            <Route exact path="/" render={() =>(
              /*The Main Part Of the Website should go inside of <main></main> */
              <main>
                <div className="container">
                  <p>Images should go here</p>
                  <p>The List of Top 20 Books from BBN</p>
                  {this.props.books.map(book =>
                    <DisplayBook key={book.id} {...book}/>
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
