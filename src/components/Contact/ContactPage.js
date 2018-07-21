import React, { Component } from 'react';
import Cristian from './Cristian';
import Heli from './Heli';
import Victor from './Victor';

class ContactPage extends Component {
  render() {
    return(
      <div className="container-fluid">
        <Cristian />
        <Heli />
        <Victor />
      </div>
    );
  }
}

export default ContactPage;
