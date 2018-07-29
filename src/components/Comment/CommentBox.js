import React, { Component } from 'react';

import CommentForm from './CommentForm';
import CommentList from './CommentList';

class CommentBox extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return(
      <div className="commentBox">
        <CommentList />
        <CommentForm bookid={this.props.bookid}/>
      </div>
    );
  }
}
export default CommentBox;
