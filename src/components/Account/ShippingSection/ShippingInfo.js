import React, { Component } from 'react';
import AddShippingAddressModal from './AddShippingAddressModal';

class ShippingInfo extends Component {
  render() {
    return(
      <div className="card">

        <div className="card-header">
          <h5>My Shipping Address Information</h5>
        </div>

        <div className="card-body">
          <table className="table align-items-center">
            <thead>
              <tr>
                <th scope="col">Shipping Address</th>
                <th scope="col">Default Shipping Address</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="d-block">11716 SW 132nd PL</span>
                  <small className="text-muted">Miami,FL 33181</small>
                </td>
                <td>
                  <div className="custom-control custom-radio">
                    <input id="radio1" name="payment-default" type="radio" className="custom-control-input" checked="" />
                    <label className="custom-control-label" htmlFor="radio1"></label>
                  </div>
                </td>
                <td>
                  <button type="submit" className="btn btn-sm btn-danger"><i className="icon-squared-cross"></i> Remove Address</button>
                </td>
              </tr>
            </tbody>
          </table>
          <AddShippingAddressModal />
        </div>

      </div>
    );
  }
}

export default ShippingInfo;
