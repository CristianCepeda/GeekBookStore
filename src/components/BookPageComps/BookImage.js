import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
 //import HarryPotterPNG from "./BookPageComps/HarryPotter.png"


const BookImage = ({Url}) => {
  console.log('Received url', Url)
  return(
    <div>
    <img src={Url} alt="Book image" width="300" height="400"/>
    </div>
  );
}


export default BookImage
