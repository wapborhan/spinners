import React, { Component } from "react";
import DATA from "../../assets/data/spinner";

export default class Spinner extends Component {
  state = {
    spinnerdata: DATA,
  };
  render() {
    console.log(this.state.spinnerdata);
    return (
      <div className="pbd-5j">
        <div className="container">
          <div className="row">
            {this.state.spinnerdata.map((item) => {
              return (
                <div className="col-md-3" key={item.id}>
                  <div className="card">
                    <div className="card-header">{item.name}</div>
                    <div className="card-body h-250">
                      <div className={item.class} id="loader1"></div>
                      {/* <div className="card">{item.code}</div> */}
                    </div>
                    <div className="card-footer">
                      <button className="btn btn-success w-100">
                        Source Code
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
