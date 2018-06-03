import React, { Component } from 'react';

class HeaderNav extends Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-expand navbar-dark d-flex bd-navbar">
          <a className="p-2 flex-grow-1 navbar-brand" href="#">GeekBookStore</a>
          <button type="button" className="p-2 btn btn-outline-secondary">Sign In</button>
        </nav>
      </div>
    );
  };
};

export default HeaderNav;
