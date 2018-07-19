import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
 //import HarryPotterPNG from "./BookPageComps/HarryPotter.png"


class BookImage extends Component{
render() {
  return(
    <div>
    <img src="https://i.imgur.com/oToUE4P.png" alt="Book image" width="500" height="600"/>
    </div>
  );
};
};


export default BookImage
