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
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="d-flex align-items-center py-0 px-md-4 mb-3 border-bottom box-shadow">
  <div className="col d-flex text-center">
    <Link to="/" className="Title p-2 flex-grow-1 navbar-brand text-secondary">GeekBookStore</Link>
  </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  </div>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Search a book
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Genre</a>
          <a className="dropdown-item" href="#">top sellers</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">book rating</a>
        </div>
      </li>
    </ul>
    <div className="col-1 d-flex justify-content-end">
      <Link to="/signin" className="btn btn-sm btn-outline-secondary">Sign In</Link>
    </div>
  </div>
</nav>
    );
  };
};

export default HeaderNav;
