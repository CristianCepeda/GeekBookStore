import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import SignIn from './SignIn';

class HeaderNav extends Component {
  render() {
    return(
      <header>
        <div className="d-flex align-items-center py-0 px-md-4 mb-3 border-bottom box-shadow">
          <div className="col d-flex text-center">
            <Link to="/" className="Title p-2 flex-grow-1 navbar-brand text-secondary">GeekBookStore</Link>
          </div>

          <div className="col-8 d-flex justify-content-center">
            <form className="justify-content-center form-inline my-2 my-lg-0">
              <input className="p-1 text-center form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div>

          <div className="col-1 d-flex justify-content-end">
            <Link to="/signin" className="btn btn-sm btn-outline-secondary">Sign In</Link>
          </div>
        </div>
      </header>
    );
  };
};

export default HeaderNav;
