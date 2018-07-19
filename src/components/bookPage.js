import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import TitleHeader from "./BookPageComps/TitleHeader";
import BookImage from "./BookPageComps/BookImage";
import RelatedBooksCarousel from "./BookPageComps/RelatedBooksCarousel";
import ProductDescription from "./BookPageComps/ProductDescription";


class bookPage extends Component {
  constructor() {
    super()
    this.state = {
      bookUrl: '',
      name: '',
      productDescription: '',
      relatedBooks: [
        {
          imageUrl: '',
          id: ''
        }
      ]
    }
  }
  componentDidMount() {
    fetch(`http://localhost:8080/book/1`).then(results => {
      return results.json()
    }).then(data => {
      const name = data.BookArray[1].Name
      this.setState({
          name
      })
      console.log(data.BookArray[1].Name)
    })
  }
  render() {
    if (!this.state.name) {
      return <p>Loading...</p>
    }

    return(

      <div className="container">
        <TitleHeader name={this.state.name}></TitleHeader>
        <div className="row">
          <div className="col-lg">
          <BookImage></BookImage>
          </div>
          <div className="col-md">
          <ProductDescription price={'19.99'}></ProductDescription>
          </div>
        </div>
        <div className="row">
          <RelatedBooksCarousel></RelatedBooksCarousel>
        </div>
      </div>
    );
  };
};

export default bookPage;
