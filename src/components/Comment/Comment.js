import React, { Component} from 'react';
import {Link} from 'react-router-dom';


class Comment extends Component {
  render() {
    return(

      var Comment = React.createClass({
        render: function() {
          return (
            <div className="comment">
              <h2 className="commentAuthor">
                {this.props.author}
              </h2>
              {this.props.children}
            </div>
          );
        }
      });


    );
  }
}

export default CommentSec;
