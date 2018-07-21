import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class TabSignIn extends Component {
  constructor(props){
    super(props);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.signUserIn = this.signUserIn.bind(this);
    this.state = {username: '', password: ''};
  }

  updateUsername(evt){
    this.setState({
      username: evt.target.value
    });
  }
  updatePassword(evt){
    this.setState({
      password: evt.target.value
    });
  }

  signUserIn(evt){
    evt.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    };

    /* URL = 'http://localhost:8080/signin' */

    axios.post('/signin', { user })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return(
      <div className="tab-pane fade show active" id="sign-in" role="tabpanel" aria-labelledby="sign-in-tab">
        <form onSubmit={this.SignUserIn}>
          <div className="form-group">
            <label htmlFor="inputUsername">Username</label>
            <input id="inputUsername" className="form-control" type="text" placeholder="Username" required autoFocus value={this.state.username} onChange={this.updateUsername}/>
          </div>
          <div className="form-group">
            <label htmlFor="inputPasswordSignIn">Password</label>
            <input id="inputPasswordSignIn" className="form-control" type="password" placeholder="Password" required value={this.state.password} onChange={this.updatePassword}/>
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block p-1 mt-3">Sign In</button>
          <div className="container text-center">
            <p className="my-2"> ------------- or ------------- </p>
            <p>   Log in with  </p>
            <div className="row">
              <Link to="./https://www.facebook.com/" className="col bg-primary text-white">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link to="https://github.com/" className="col bg-primary text-white">
                <i className="fab fa-github"></i>
              </Link>
              <Link to="https://www.google.com/" className="col bg-primary text-white">
                <i className="fab fa-google"></i>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TabSignIn;
