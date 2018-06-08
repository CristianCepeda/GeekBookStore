import React, { Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

class FooterSection extends Component {
  render() {
    return(
      <div>
        <p>CopyRight</p>
        <p>Add SightMap</p>
        <Link to="/">Contact</Link>
        <p>For contact share the people that contributed to the website</p>
        <Link to="/">About</Link>
        <p>What the website is about, maybe also inculde what we used and a link to the github account for refrence</p>
        <p>Footer goes Here</p>
        <a href="https://www.orbitmedia.com/blog/website-footer-design-best-practices/">Use this website if anything</a>
      </div>
    );
  };
};

export default FooterSection;
