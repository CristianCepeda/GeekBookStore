import React, { Component} from 'react';
import {Link} from 'react-router-dom';


class CommentSec extends Component {

  handleSubmitClick = () => {
    const name = this._name.value;
    // do something with `name`
  }

  render() {
    return(

      <div>
        <input type="text" ref={input => this._name = input} />
        <button onClick={this.handleSubmitClick}>Sign up</button>
      </div>

        /*<div className="form-group">
          <label htmlFor="comment">Comment:</label>
          <textarea className="form-control" rows="5" id="TexareaComment"></textarea>
          <button type="submit" className="btn btn-primary btn-lg" onclick="typeComment">Try it</button>
          <p value="post"></p>
        </div>*/
    );
  }
}

export default CommentSec;
