import React, { Component} from 'react';
import {Link} from 'react-router-dom';

class FooterSection extends Component {
  render() {
    return(
      <footer>
        <p>For reference on standards of footers visit this <a href="https://www.orbitmedia.com/blog/website-footer-design-best-practices/">Page</a></p>
        <div className="container px-5 pt-3 border-top box-shadow">
          <div className="row">
            <div className="col">
              <p>© 2018 GeekBookStore, Inc.</p>
            </div>
            <div className="col">
              <p>Add SightMap</p>
              <Link to="/account">Account</Link>
            </div>
            <div className="col">
              <Link to="/contact">Contact</Link>
            </div>
            <div className="col">
              <Link to="/about">About</Link>
              <p>What the website is about, maybe also include what we used and a link to the github account for reference</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterSection;
