import React, { Component } from 'react';

/*
  - And we are making this a property of the component since the data will
  never change.
*/
import data from '../../assets/data/schemaUSA';
var states = data.states;

class PersonalInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      zip:''
    };
  }

  render() {
    return(
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
    );
  }
}

export default PersonalInfo;
