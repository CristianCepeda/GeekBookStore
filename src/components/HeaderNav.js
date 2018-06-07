import React, { Component } from 'react';

class HeaderNav extends Component {
  render() {
    return(
      <header>
        <div className="Header d-md-flex p-1 border-bottom box-shadow">
          <a className="p-2 flex-grow-1 navbar-brand" href="#">GeekBookStore</a>
          <button className="btn btn-sm btn-outline-success">Sign Up</button>
        </div>
      </header>
    );
  };
};

export default HeaderNav;
