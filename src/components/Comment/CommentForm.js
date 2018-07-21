import React, { Component } from 'react';

class CommentForm extends Component {

  constructor(props){
    super(props);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);

    this.state = {username: '', password: ''};
  }

  getInitialState() {
    return {user: '', text: ''};
  }

  handleUserChange(evt) {
    this.setState({
      user: evt.target.value
    });
  }

  handleTextChange(evt) {
    this.setState({
      text: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    var author = this.state.user.trim();
    var text = this.state.text.trim();
    if (!text || !user) {
      return;
    }
    this.props.onCommentSubmit({user: user, text: text});
    this.setState({author: '', text: ''});
  }

  render() {
    return(
      <div className="commentForm">
        <form>
              <input
                type="text"
                placeholder="Your name"
                value={this.state.user}
                onChange={this.handleUserChange}/>
              <input
                type="text"
                placeholder="Say something..."
                value={this.state.text}
                onChange={this.handleTextChange}/>
              <input type="submit" value="Post" />
          </form>
      </div>
    );
  }
}

export default CommentForm;
