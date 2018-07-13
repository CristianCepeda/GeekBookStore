import React, { Component } from 'react';

class PaymentInfo extends Component {
  render() {
    return(
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
    );
  }
}

export default PaymentInfo;
