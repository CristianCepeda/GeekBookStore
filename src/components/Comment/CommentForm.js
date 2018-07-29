import React, { Component } from 'react';
import axios from 'axios';

class CommentForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      BookId: '',
      user: '',
      text: ''
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(evt) {
    this.setState({
      text: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    axios.post(`http://localhost:8000/book/${this.props.bookid}/Comment` , {
      BookId: this.state.BookId,
      user: this.state.user,
      text: this.state.text})
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      });
  }

  render() {
    return(
      <div className="CommentForm" id= "comment-form">
        <form onSubmit ={this.handleSubmit}>
          <div className="form-group">
            <input
              id = "inputComment"
              className = "form-control"
              type="text"
              placeholder="Say something..."
              value={this.state.text}
              onChange={this.handleTextChange}/>
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block p-1 mt-3">Submit</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
