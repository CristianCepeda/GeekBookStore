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
  constructor(props) {
    super(props)
    this.state = {
      bookId: '',
      Url: '',
      Name: '',
      Description: '',
      Price: ''
      }
  }
  componentDidMount() {
    const { bookId } = this.props.match.params
    fetch(`http://localhost:8080/book/${bookId}`).then(results => {
      return results.json()
    }).then(data => {
      console.log('data', data)
      const { Name, Url, Price, Rating, Description } = data.BookArray[bookId]
      console.log('Book URL:', Url)
      this.setState({
          Name,
          Url,
          Price,
          Rating,
          Description
      })
    })
  }

  render() {
    if (!this.state.Name) {
      return <p>Loading...</p>
    }

    return(

      <div className="container">
        <TitleHeader name={this.state.Name}></TitleHeader>
        {this.state.Description}

        <div className="row">
          <div className="col-lg">
          <BookImage Url={this.state.Url}></BookImage>
          </div>
          <div className="col-md">
          <ProductDescription price={this.state.Price} rating={this.state.Rating} description={this.state.Description} ></ProductDescription>
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
