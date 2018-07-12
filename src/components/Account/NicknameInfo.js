import React, { Component } from 'react';

class NicknameInfo extends Component {
  constructor(props){
    super(props);
    this.updateNickname = this.updateNickname.bind(this);

    this.state = {nickname: ''};
  }

  // This is what's called Event Handlers ... they are essentially or are
  // functions to update the state once onChange is used.

  updateNickname(evt){
    this.setState({
      nickname: evt.target.value
    });
  }

  render() {
    return(
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
    );
  }
}

export default NicknameInfo;
