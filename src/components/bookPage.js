import React, { Component } from 'react';
import TitleHeader from './BookPageComps/TitleHeader';
import BookImage from './BookPageComps/BookImage';
import ProductDescription from './BookPageComps/ProductDescription';


class bookPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookId: '',
      Url: '',
      Name: '',
      Rating: '',
      Description: '',
      Price: ''
    };
  }

  componentDidMount() {
    const { bookId } = this.props.match.params;
    fetch(`http://localhost:8000/book/${bookId}`).then(results => {
      return results.json();
    }).then(data => {
      console.log('data', data);
      const { Name, Url, Price, Rating, Description } = data.BookArray[bookId];
      console.log('Book URL:', Url);
      this.setState({
        Name,
        Url,
        Price,
        Rating,
        Description,
        bookId
      });
    });
  }

  render() {
    if (!this.state.Name) {
      return <p>Loading...</p>;
    }

    return(

      <div className="container">
        <TitleHeader name={this.state.Name}></TitleHeader>
        <div className="row">
          <div className="col-lg">
            <BookImage Url={this.state.Url}></BookImage>
          </div>
          <div className="col-md">
            <ProductDescription price={this.state.Price} rating={this.state.Rating} description={this.state.Description} BookID={this.state.bookId}></ProductDescription>
          </div>
        </div>
      </div>
    );
  }
}

export default bookPage;
