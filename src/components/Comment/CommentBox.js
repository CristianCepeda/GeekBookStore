import React, { Component } from 'react';

import CommentForm from './CommentForm';
import CommentList from './CommentList';

class CommentBox extends Component {

  render() {
    return(
      <div className="commentBox">
        <h1>Here goes The comment Box</h1>
        <CommentList data/>
        <CommentForm />
      </div>
    );
  }
}
export default CommentBox;
