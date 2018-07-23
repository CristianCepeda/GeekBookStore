import React, { Component } from 'react';
import axios from 'axios';

class NicknameInfo extends Component {
  constructor(props){
    super(props);
    this.state = {nickname: ''};

    this.updateNickname = this.updateNickname.bind(this);
    this.updateNicknameInfoForm = this.updateNicknameInfoForm.bind(this);
  }

  updateNickname(evt){
    this.setState({
      nickname: evt.target.value
    });
  }
  updateNicknameInfoForm(evt){
    var UPDATE_THIS_ID = '5b530cebd54c9fa00fe72691';
    evt.preventDefault();
    axios.put(`/user/${UPDATE_THIS_ID}/nickname`, {
      nickname: this.state.nickname
    })
      .catch(function(error){
        console.log(error);
      });
  }
  componentDidMount() {
    var UPDATE_THIS_ID = '5b530cebd54c9fa00fe72691';
    axios.get(`/user/${UPDATE_THIS_ID}/nickname`)
      .then(function(res){
        this.setState({
          nickname: res.data.nickname
        });
      }.bind(this));
  }

  render() {
    return(
      <div className="card">
        <div className="card-header">
          <h5>Book Rating and Commenting Information</h5>
        </div>
        <div className="card-body">
          <form onSubmit={this.updateNicknameInfoForm}>
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
