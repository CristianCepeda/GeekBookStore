import React, { Component } from 'react';

import Comment from './Comment';

class CommentList extends Component {

  render() {
    return(
      <div className="commentList">
      Yeahhhh I am a CommentList.
      <Comment user="Kevin Kim">Nice, Comment Box</Comment>
      <Comment user="Kevin Kim">Sometimes I talk to myself</Comment>
      </div>

    );
  }
}

export default CommentList;
