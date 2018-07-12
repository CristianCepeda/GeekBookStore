import React from 'react';

const DisplayBook = (book) => (
  <div className="DisplayBookPreview">
    <div>
      Title: {book.title}
      <br/>
      Author: {book.author}
      <br/>
      Publisher: {book.publisher}
      <br/>
      ISBN: {book.isbn}
    </div>
  </div>
);


export default DisplayBook;
