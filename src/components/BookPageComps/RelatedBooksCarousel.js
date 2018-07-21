import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



class RelatedBooksCarousel extends Component{
render() {
  return(
    <div className="container">

      <div id="carouselExampleControls" class="carousel slide container" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="https://i.imgur.com/oToUE4P.png" alt="First slide"width="200" height="300"/>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="https://i.imgur.com/oToUE4P.png" alt="Second slide"width="100" height="300"/>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
    </div>
  </div>

  );
};
};


export default RelatedBooksCarousel
