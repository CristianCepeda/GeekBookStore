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
/*Vic's*/
import bookPage from './bookPage';
/* Components */
import HeaderNav from './HeaderNav';
import DisplayBook from './DisplayBook';
import FooterSection from './FooterSection';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch('http://localhost:8000/book').then(results => {
      return results.json();
    }).then(data => {
      console.log(data);
      // var arrayLength = Object.keys(data).length;
      let newData = [];
      for (var i in data) {
        if (!data.hasOwnProperty(i)) continue;
        console.log('got here');
        newData.push(data[i]);
      }
      this.setState({
        data: newData
      }, () => {
        console.log('new data', this.state);
      });
    });
  }

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
            <Route path="/bookpage/:bookId" component={bookPage}/>
            <Route exact path="/" render={() =>(
              /*The Main Part Of the Website should go inside of <main></main> */
              <main>
                <div className="container">

                  <h1 align="left">Books</h1>
                  {this.state.data.map(book =>
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
