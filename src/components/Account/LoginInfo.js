import React, { Component } from 'react';

class LoginInfo extends Component {
  constructor(props){
    super(props);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);

    this.state = {username: '', password: ''};

  }

  /*
    - These are Event Handler functions. They will update the state once
    onChange is used.
  */
  updateUsername(evt){
    this.setState({
      username: evt.target.value
    });
  }
  updatePassword(evt){
    this.setState({
      password: evt.target.value
    });
  }

  render() {
    return(
      <div className="card">
        <div className="card-header">
          <h5>GeekBookStore Login Information</h5>
        </div>
        <div className="card-body">
          <form>
            <div className="form-row">
              <div className="form-group col">
                <label htmlFor="userName">Username:</label>
                <input id="userName" className="form-control" type="text" placeholder="Username" value={this.state.username} onChange={this.updateUsername}/>
              </div>
              <div className="form-group col">
                <label htmlFor="userPassword">Password:</label>
                <input id="userPassword" className="form-control" type="password" placeholder="Password" value={this.state.password} onChange={this.updatePassword}/>
              </div>
            </div>
            <button className="btn btn-secondary" type="submit">Save Changes</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginInfo;
