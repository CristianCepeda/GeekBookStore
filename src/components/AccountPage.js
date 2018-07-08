import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import data from '../schemaUSA';

/*
And we are making this a property of the component since the data will
never change.
*/
var states = data.states;

class AccountPage extends Component {
  constructor(props){
    super(props);
    this.updateUsername = this.updateUsername.bind(this);
    this.updateNickname = this.updateNickname.bind(this);
    this.updatePassword = this.updatePassword.bind(this);

    this.state = {
      username: "",
      nickname: "",
      email: "",
      password: "",
      address: "",
      address2: "",
      city: "",
      state: "",
      zip:""
    }




// This is what's called Event Handlers ... they are essentially or are
// functions to update the state once onChange is used.
  updateUsername(evt){
    this.setState({
      username: evt.target.value
    });
  }
  updateNickname(evt){
    this.setState({
      nickname: evt.target.value
    });
  }
  updatePassword(evt){
    this.setState({
      password: evt.target.value
    });
  }

  render() {
    return(
      <div className="AccountPageCSS">
        <div className="row m-3">
          <div className="col-md-6 my-3">
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
          </div>
          <div className="col-md-6 my-3">
            <div className="card">
              <div className="card-header">
                <h5>Book Rating and Commenting Information</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-row">
                    <div className="form-group col">
                      <label htmlFor="userNickname">Nickname:</label>
                      <input id="userNickname" className="form-control" type="text" placeholder="Nickname" value={this.state.nickname} onChange={this.updateNickname}/>
                    </div>
                  </div>
                  <button className="btn btn-secondary" type="submit">Save Changes</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-lg-6 my-1">
            <div className="card">
              <div className="card-header">
                <h5>My Personal Information</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="userEmail">Email:</label>
                    <input id="userEmail" className="form-control" type="email" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userAddress">Address:</label>
                    <input  id="userAddress" className="form-control" type="text" placeholder="1234 Main St" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userAddress2">Address 2:</label>
                    <input  id="userAddress2" className="form-control" type="text" placeholder="Apartment, studio, or floor" />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="userCity">City:</label>
                      <input id="userCity" className="form-control" type="text" />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="userState">State:</label>
                      <select id="userState" className="form-control">
                        <option>Choose...</option>
                        {states.map(function(state){
                          return (
                            <option value={state.key} key={state.key}>
                              {state.display}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="form-group col-md-2">
                      <label htmlFor="inputZip">Zip:</label>
                      <input type="text" className="form-control" id="inputZip" />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-secondary">Save Changes</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 my-1">
            <div className="card">
              <div className="card-header">
                <h5>My Payment Information</h5>
              </div>
              <div className="card-body">
                <form>
                  <table className="table align-items-center">
                    <thead>
                      <tr>
                        <th scope="col">Card Type</th>
                        <th scope="col">Card Number</th>
                        <th scope="col">Default Payment Method</th>
                        <th scope="col">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <img alt="Image" src="./img/Visa_Inc._logo.svg" className="avatar avatar-sm" />
                        </th>
                        <td>
                          <span className="d-block">•••• •••• •••• 8372</span>
                          <small className="text-muted">Exp: 06/22</small>
                        </td>
                        <td>
                          <div className="custom-control custom-radio">
                            <input id="radio1" name="payment-default" type="radio" className="custom-control-input" checked="" />
                            <label className="custom-control-label" htmlFor="radio1"></label>
                          </div>
                        </td>
                        <td>
                          <button type="submit" className="btn btn-sm btn-danger"><i className="icon-squared-cross"></i> Remove card</button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <img alt="Image" src="assets/img/logo-payment-amex.svg" className="avatar avatar-sm avatar-square" />
                        </th>
                        <td>
                          <span className="d-block">•••• •••• •••• 1225</span>
                          <small className="text-muted">Exp: 07/21</small>
                        </td>
                        <td>
                          <div className="custom-control custom-radio">
                            <input id="radio2" name="payment-default" type="radio" className="custom-control-input" />
                            <label className="custom-control-label" htmlFor="radio2"></label>
                          </div>
                        </td>
                        <td>
                          <button type="submit" className="btn btn-sm btn-danger"><i className="icon-squared-cross"></i> Remove card</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <button className="btn btn-success">Add new card</button>
                </form>
                <p>Given Card Name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default AccountPage;
