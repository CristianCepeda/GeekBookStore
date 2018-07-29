import React, { Component } from 'react';

class RelatedBooksCarousel extends Component{
  render() {
    return(
      <div className="container">

        <div id="carouselExampleControls" className="carousel slide container" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://i.imgur.com/oToUE4P.png" alt="First slide"width="200" height="300"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://i.imgur.com/oToUE4P.png" alt="Second slide"width="100" height="300"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}


export default RelatedBooksCarousel;
