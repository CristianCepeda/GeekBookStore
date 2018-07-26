import React, { Component } from 'react';
/* Components */
import CommentBox from './CommentBox';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import Comment from './Comment';

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];








ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
export default CommentSect;
