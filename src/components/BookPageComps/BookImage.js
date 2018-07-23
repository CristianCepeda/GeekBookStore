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

      <a href="#openModal">
        <img src={Url} width="400" height="500"></img>
      </a>
      <div id="openModal" class="modalDialog">
          <div>	<a href="#close" title="Close" class="close">X</a> <div>
           <img src={Url}></img>
      </div>
    </div>
   </div>
  </div>
  );
}


export default BookImage
