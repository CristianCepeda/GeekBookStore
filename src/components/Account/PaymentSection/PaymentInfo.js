import React, { Component } from 'react';
import axios from 'axios';
import AddCardModal from './AddCardModal';

class PaymentInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      card: [{
        nameoncard: '',
        cardnumber: '',
        expirydate: '',
        securitycode:''
      }]
    };
  }

  componentDidMount(){
    var UPDATE_THIS_ID = '5b579485aed76205916aea31';
    axios.get(`/user/${UPDATE_THIS_ID}/paymentinfo`)
      .then(function(res){
        this.setState({
          nameoncard: res.data.nameoncard,
          cardnumber: res.data.cardnumber,
          expirydate: res.data.expirydate,
          securitycode: res.data.securitycode
        });
      }.bind(this));
  }

  render() {
    return(
      <div className="card">

        <div className="card-header">
          <h5>My Payment Information</h5>
        </div>

        <div className="card-body">
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
                  <button type="submit" className="btn btn-sm btn-danger"><i className="icon-squared-cross"></i> Remove Card</button>
                </td>
              </tr>
            </tbody>
          </table>
          <AddCardModal />
        </div>

      </div>
    );
  }
}

export default PaymentInfo;
