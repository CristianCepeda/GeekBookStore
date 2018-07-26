import React, { Component } from 'react';
// import axios from 'axios';
/* Components */
import LoginInfo from './LoginInfo';
import NicknameInfo from './NicknameInfo';
import PaymentInfo from './PaymentSection/PaymentInfo';
import PersonalInfo from './PersonalInfo';

class AccountPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      nickname: ''
    };
  }

  // FETCH THE DATA FROM DATABASE WHEN USER ENTERS
  componentDidMount() {
    // var userID = '5b51f8ad6134227098d02786';
    // axios.get(`http://localhost:8080/account/${userID}`)
    //   .then(function(res){
    //     this.setState({
    //       username: res.data.username,
    //       password: res.data.password
    //       // nickname: res.data.nickname
    //     });
    //   }.bind(this));
  }

  // SEE HOW YOU CAN PASS THE PATH AS A PROP TO <LoginInfo />
  render() {
    return(
      <div className="AccountPageCSS">
        <div className="row m-3">
          <div className="col-md-6 my-3">
            <LoginInfo />
          </div>
          <div className="col-md-6 my-3">
            <NicknameInfo />
          </div>
        </div>
        <div className="row m-3">
          <div className="col-lg-6 my-1">
            <PersonalInfo />
          </div>
          <div className="col-lg-6 my-1">
            <PaymentInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default AccountPage;
