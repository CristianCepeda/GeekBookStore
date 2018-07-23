import React, { Component } from 'react';
import axios from 'axios';

class TabCreateAccount extends Component {
  constructor(props){
    super(props);
    this.updateFirstname = this.updateFirstname.bind(this);
    this.updateLastname = this.updateLastname.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.createNewAccount = this.createNewAccount.bind(this);

    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      password: ''
    };
  }

  updateFirstname(evt){
    this.setState({
      firstname: evt.target.value
    });
  }
  updateLastname(evt){
    this.setState({
      lastname: evt.target.value
    });
  }
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

  createNewAccount(evt){
    evt.preventDefault();
    axios.post('/auth/createaccount', {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      password: this.state.password})
      .then(function(response) {
        this.props.history.push('/');
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      });
  }

  // axios.post('/user', {firstName: 'Fred', lastName: 'Flintstone'})
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });



  render() {
    return(
      <div className="tab-pane fade" id="create-account" role="tabpanel" aria-labelledby="create-account-tab">
        <form onSubmit={this.createNewAccount}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputFirstname">First Name</label>
              <input id="inputFirstname" className="form-control" type="text" placeholder="First Name" required value={this.state.firstname} onChange={this.updateFirstname}/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputLastName">Last Name</label>
              <input id="inputLastname" className="form-control" type="text" placeholder="Last Name" required value={this.state.lastname} onChange={this.updateLastname}/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputUsernameCreateAccount">Username</label>
            <input id="inputUsernameCreateAccount" className="form-control" type="text" placeholder="Username" required value={this.state.username} onChange={this.updateUsername}/>
          </div>
          <div className="form-group">
            <label htmlFor="inputPasswordCreateAccount">Password</label>
            <input id="inputPasswordCreateAccount" className="form-control" type="password" placeholder="Password" required value={this.state.password} onChange={this.updatePassword}/>
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block p-1 mt-3">Submit</button>
        </form>
      </div>
    );
  }
}

export default TabCreateAccount;


// state = {
//   name: ''
// }
// handleChange = event => {
//   this.setState({ name: event.target.value });
// }
//
// handleSubmit = event => {
//   event.preventDefault();
//
//   const user = {
//     name: this.state.name
//   };
//
//   axios.post('https://jsonplaceholder.typicode.com/users', { user })
//     .then(res => {
//       console.log(res);
//       console.log(res.data);
//     });
// }
//
//
// axios.get('/user', { user: {ID: 12345} })
// axios.get('/user', { params: {ID: 12345} })
// .then(function (response) {
//   console.log(response);
// })
