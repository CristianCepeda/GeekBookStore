import React, { Component } from 'react';
/* Components */
import LoginInfo from './LoginInfo';
import NicknameInfo from './NicknameInfo';
import PaymentInfo from './PaymentInfo';
import PersonalInfo from './PersonalInfo';

class AccountPage extends Component {
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
