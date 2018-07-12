import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

/* Pages */
import SignIn from './SignIn';
import AccountPage from './Account/AccountPage';
/* Components */
import HeaderNav from './HeaderNav';
import DisplayBook from './DisplayBook';
import FooterSection from './FooterSection';
import CommentSec from './CommentSec';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderNav />
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/accountpage" component={AccountPage} />
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
                /*<div className="container">*/
                /*  <CommentSec />*/
              /*  </div>*/
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
