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
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    fetch(`http://localhost:8080/book`).then(results => {
      return results.json()
    }).then(data => {
      //console.log(data);
      var arrayLength = Object.keys(data).length;
      let newData = []
      for (var i in data) {
        if (!data.hasOwnProperty(i)) continue
        //console.log('got here')
        newData.push(data[i])
      }
      this.setState({
        data: newData
      }, () => {
        //console.log('new data', this.state)
      })
    })
  }
  render() {
    return (
      <Router>
        <div>
          <HeaderNav />
          <Switch>
            <Route path="/signup" component={SignUp}/>
            <Route path="/bookpage/:bookId" component={bookPage}/>

            <Route exact path="/" render={(props) =>(
              /*The Main Part Of the Website should go inside of <main></main> */
              <main>
                <div className="container">

                  <h1 align="left">Books</h1>
                  {this.state.data.map(book =>
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
