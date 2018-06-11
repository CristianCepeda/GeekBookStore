import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class SignIn extends Component {
  render() {
    return(
      <div className="container my-5">

        <div className="row align-items-center">
          <div className="col"></div>

          <div className="col">

            <div className="card text-center bg-light">
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Sign In</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Create Account</a>
                  </li>
                </ul>
              </div>

              <div className="card-body">
                <form>
                  <div className="form-label-group">
                    <label htmlFor="inputEmail">Email Address</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Email address" required autoFocus/>
                  </div>
                  <div className="form-label-group">
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" required />
                  </div>
                  <button type="button" className="btn btn-primary btn-lg btn-block p-1 mt-3">Sign In</button>
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

            </div>
          </div>

          <div className="col"></div>
        </div>

      </div>
    );
  };
};

export default SignIn;
