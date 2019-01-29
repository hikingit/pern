import React, { Component } from "react";
import Diagram from "./diagram/Diagram";
import Map from "./map/Map";
import "./Text.scss";

export default class Text extends Component {
    constructor(props) {
      super(props);
      this.state = {
        step: 0
      }
    }

  handleChange = (num) => {
    this.setState({ step: num });
  };

  render() {
    const { step } = this.state;
    return (
      <div className="text-section mt-3">
        <div className="position-relative pb-3">
          <div className="position-absolute aux d-flex">
            <div className={`border btn ${(step === 1) ? "text-secondary" : "text-dark bg-white" }`} onClick={() => {this.handleChange(0)}}>Diagram</div>
            <div className={`border btn ${(step === 1) ? "text-dark bg-white" : "text-secondary" }`} onClick={() => {this.handleChange(1)}}>Map</div>
          </div>
        </div>
        <div className="font-weight-bold text-center">Texts</div>
        <div className="card mt-3">
          {
            (step === 0) ?
            <Diagram /> :
            <Map />
          }
        </div>
      </div>
    );
  }
}
