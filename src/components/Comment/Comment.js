import React, { Component} from 'react';
import {Link} from 'react-router-dom';


class Comment extends Component {

  constructor(props){
    super(props);
    this.props = {
      id: '',
      user: '',
      children: ''
    };
  }

  render() {
    return(
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.user}
        </h2>
        {this.props.children}
      </div>
    );
  }
}

export default Comment;
