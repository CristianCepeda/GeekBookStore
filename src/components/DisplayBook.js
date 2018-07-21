import React, { Component } from 'react';

import { Link } from 'react-router-dom'

const DisplayBook = (book) => (
  <span className="DisplayBookPreview">
      <Link to={`/bookpage/${book.id}`}> <img src={book.Url} alt="Book image" width="100" height="150"/> </Link>
  </span>
);


export default DisplayBook;
