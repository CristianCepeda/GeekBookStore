import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import SignUp from './SignUp';

class HeaderNav extends Component {
  render() {
    return(
      <header>
        <div className="d-flex flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom box-shadow">
          <Link to="/" className="p-2 flex-grow-1 navbar-brand">GeekBookStore</Link>
          <Link to="/signup" className="btn btn-sm btn-outline-secondary">Sign Up</Link>
        </div>
      </header>
    );
  };
};

export default HeaderNav;
