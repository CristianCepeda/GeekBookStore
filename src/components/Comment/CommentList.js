import React, { Component } from 'react';
import axios from 'axios';

import Comment from './Comment';
import data from '../../assets/data/schemaUSA';
var states = data.states;



class CommentList extends Component {

  constructor(props){
    super(props);
    this.state = {
      BookId: '',
      username: '',
      text: ''
    };

  componentDidMount() {
     //var userID = '5b51f8ad6134227098d02786';
     axios.get(`/bookpage/1/Comment`) //${UPDATE_THIS_BOOK_ID}
       .then(function(res){
         this.setState({
           text: res.data.text,
         });
       }.bind(this));
  }

  render() {
    return(
      <div className="commentList">
      <Comment username="Kevin Kim" text = "Nice comment"></Comment>
      <Comment username="Tokiomi" text =" thank you!"></Comment>
      </div>

    );
  }
}

export default CommentList;
