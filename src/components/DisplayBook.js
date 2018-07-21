import React, { Component } from 'react';

import { Link } from 'react-router-dom'

const DisplayBook = (book) => (
  <div className="DisplayBookPreview">
      <Link to={`/bookpage/${book.id}`}> <img src={book.Url} alt="Book image" width="100" height="150"/> </Link>
  </div>
);


export default DisplayBook;
