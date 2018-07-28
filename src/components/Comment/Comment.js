import React, { Component} from 'react';
import {Link} from 'react-router-dom';


class Comment extends Component {

  constructor(props){
    super(props);
    this.props = {
      Username: '',
      text: ''
    };
  }

  render() {
    return(
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.user}
        </h2>
        {this.props.text}
      </div>
    );
  }
}

export default Comment;
