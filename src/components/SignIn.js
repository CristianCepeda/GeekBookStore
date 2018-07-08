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
        <div className="row">
          <div className="CardColumn col-md"></div>
          <div className="CardColumn col-lg">
            <div className="MainCardComponent card text-center bg-light">
              <div className="card-header">

                <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="sign-in-tab" data-toggle="tab" href="#sign-in" role="tab" aria-controls="sign-in" aria-selected="true">Sign In</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="create-account-tab" data-toggle="tab" href="#create-account" role="tab" aria-controls="create-account" aria-selected="false">Create Account</a>
                  </li>
                </ul>

              </div>
              <div className="card-body tab-content" id="myTabContent">

                <div className="tab-pane fade show active" id="sign-in" role="tabpanel" aria-labelledby="sign-in-tab">
                  <form>
                    <div className="form-group">
                      <label htmlFor="inputUsername">Username</label>
                      <input id="inputUsername" className="form-control" type="text" placeholder="Username" required autoFocus/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputPasswordSignIn">Password</label>
                      <input type="password" className="form-control" id="inputPasswordSignIn" placeholder="Password" required />
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

                <div className="tab-pane fade" id="create-account" role="tabpanel" aria-labelledby="create-account-tab">
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputFirstName">First Name</label>
                        <input type="text" className="form-control" id="inputFirstName" placeholder="First Name"/>
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="inputLastName">Last Name</label>
                        <input type="text" className="form-control" id="inputLastName" placeholder="Last Name"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputEmailCreateAccount">Email Address</label>
                      <input type="email" className="form-control" id="inputEmailCreateAccount" placeholder="Email address" required autoFocus/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputPasswordCreateAccount">Password</label>
                      <input type="password" className="form-control" id="inputPasswordCreateAccount" placeholder="Password" required />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block p-1 mt-3">Submit</button>
                  </form>
                </div>

              </div>
            </div>
          </div>
          <div className="CardColumn col-md"></div>
        </div>
      </div>
    );
  };
};

export default SignIn;
