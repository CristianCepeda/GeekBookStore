import React, { Component } from 'react';

import data from '../../../assets/data/schemaUSA';
var states = data.states;

class AddShippingAddressModal extends Component {
  render() {
    return(
      <form>
        <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#newShippingAddressModal">Add Shipping Address</button>
        <div className="modal fade" id="newShippingAddressModal" tabIndex="-1" role="dialog" aria-labelledby="newShippingAddressModalTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="newShippingAddressModalTitle">Shipping Information</h5>
                <button type="button" className="btn btn-danger" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="userShippingAddress">Address:</label>
                  <input  id="userShippingAddress" className="form-control" type="text" placeholder="1234 Main St" />
                </div>
                <div className="form-group">
                  <label htmlFor="userShippingAddress2">Address 2:</label>
                  <input  id="userShippingAddress2" className="form-control" type="text" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="userShippingCity">City:</label>
                    <input id="userShippingCity" className="form-control" type="text" />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="userShippingState">State:</label>
                    <select id="userShippingState" className="form-control" >
                      <option>Choose...</option>
                      {states.map(function(state){
                        return (
                          <option value={state.key} key={state.key} >
                            {state.display}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputShippingZip">Zip:</label>
                    <input id="inputShippingZip" className="form-control" type="text" />
                  </div>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-danger" type="button" data-dismiss="modal">Close</button>
                  <button className="btn btn-secondary" type="submit">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default AddShippingAddressModal;
