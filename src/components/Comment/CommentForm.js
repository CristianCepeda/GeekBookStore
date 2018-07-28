import React, { Component } from 'react';
import axios from 'axios';

class CommentForm extends Component {

  constructor(props){
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);

    this.state = {
      text: ''
    };
  }

  handleTextChange(evt) {
    this.setState({
      text: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    axios.post('/bookpage/1/comment', {
      text: this.state.firstname,}/*the parameters*/)//sending the information to local8080/auth/create account
      .then(function(response) {
        this.props.history.push('/');
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
