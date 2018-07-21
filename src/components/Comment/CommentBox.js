import React, { Component } from 'react';

import CommentForm from './CommentForm';
import CommentList from './CommentList';

class CommentBox extends Component {

  loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
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
