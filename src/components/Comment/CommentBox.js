import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentForm from './CommentForm';
import CommentList from './CommentList';

class CommentBox extends Component {

  render() {
    return(
      <div className="commentBox">
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}
export default CommentBox;
