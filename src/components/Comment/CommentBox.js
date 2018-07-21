import React, { Component } from 'react';

import CommentForm from './CommentForm';
import CommentList from './CommentList';

class CommentBox extends Component {
  render() {
    return(
      <div className="commentBox">
        <h1>WOO My Comment Box</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}
export default CommentBox;
