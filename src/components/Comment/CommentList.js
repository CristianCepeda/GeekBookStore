import React, { Component } from 'react';

import Comment from './Comment';
import data from '../../assets/data/schemaUSA';
var states = data.states;

class CommentList extends Component {


  render() {
    return(
      <div className="commentList">
      <Comment user="Kevin Kim">Nice, Comment Box</Comment>
      <Comment user="Tokiomi">Breakfast</Comment>
      </div>

    );
  }
}

export default CommentList;
