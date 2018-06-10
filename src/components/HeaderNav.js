import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

<<<<<<< HEAD
import SignUp from './SignUp';
=======
import SignIn from './SignIn';
>>>>>>> cristian-cepeda

class HeaderNav extends Component {
  render() {
    return(
      <header>
        <div className="d-flex flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom box-shadow">
<<<<<<< HEAD
          <Link to="/" className="p-2 flex-grow-1 navbar-brand">GeekBookStore</Link>
          <Link to="/signup" className="btn btn-sm btn-outline-secondary">Sign Up</Link>
=======
          <Link to="/" className="Title p-2 flex-grow-1 navbar-brand text-secondary">GeekBookStore</Link>
          <Link to="/signin" className="btn btn-sm btn-outline-secondary">Sign In</Link>
>>>>>>> cristian-cepeda
        </div>
      </header>
    );
  };
};

export default HeaderNav;
