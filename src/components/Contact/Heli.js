import React, { Component } from 'react';

class Heli extends Component {
  render() {
    return(
      <div className="row my-3">
        <div className="col-md"></div>
        <div className="col-lg">
          <div className="card bg-light">
            <div className="card-body">
              <div className="row">
                <div className="col-md-7">
                  <h2>Heli Cobos</h2>
                  <p>GitHub: <a href="https://github.com/hcobo002">www.github.com/hcobo002</a></p>
                  <p>Email: hcobo002@fiu.edu</p>
                </div>
                <div className="col-md-5">
                  <img className="card-img" src=".../100px260/" alt="Card image"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md"></div>
      </div>
    );
  }
}

export default Heli;
