import React, { Component } from "react";
import DATA from "../../assets/data/spinner";
import Source from "./Source";
import SpinItem from "./SpinItem";

class Spinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinnerData: DATA,
      show: false,
      selectedSpinner: null,
    };
  }
  selectedSpinnerHandler = (spinno) => {
    const upspin = this.state.spinnerData.filter(
      (item) => item.id === spinno
    )[0];

    this.setState({
      selectedSpinner: upspin,
      show: true,
    });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  render() {
    // console.log(this.state.selectedSpinner);
    // const source = <Source spin={this.state.selectedspinner} />;
    return (
      <div className="pbd-5j">
        <div className="container">
          <div className="row">
            {this.state.spinnerData.map((item) => {
              return (
                <SpinItem
                  data={item}
                  selectedSpinner={this.state.selectedSpinner}
                  key={item.id}
                  selecSpin={() => this.selectedSpinnerHandler(item.id)}
                  show={this.state.show}
                  handleClose={this.handleClose}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Spinner;
