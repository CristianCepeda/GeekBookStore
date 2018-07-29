import React, { Component } from 'react';
import axios from 'axios';

function Comments(props) {
  return(
    <div className="card" id = "comment-user">
      <div className= "card-header">
        <h5>{props.name}</h5>
      </div>

      <div className= "card-body" id = "comment-text">
        <p>{props.text}</p>
      </div>
    </div>
  );
}


class CommentList extends Component {

  constructor(props){
    super(props);
    this.state = {
      BookId: '',
      name: '',
      text: ''
    };
  }

  componentDidMount() {
    axios.get('/bookpage/1/Comment')
      .then(function(res){
        this.setState({
          text: res.data.text,
        });
      }.bind(this));
  }

  render() {
    return(
      <div className="commentList">
        <Comments name="Kevin Kim" text = "Nice, Comment Box!"></Comments>
        <Comments name="Tokiomi" text = "Thank you :)"></Comments>
      </div>
    );
  }
}

export default CommentList;
