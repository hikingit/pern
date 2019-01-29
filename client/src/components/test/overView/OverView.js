import React, { Component } from "react";

export default class OverView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { overview } = this.props;
    return (
      <div className="mt-3 mb-4">
        <div className="card">
          <div className="card-header bg-white font-weight-bold">OVERVIEW</div>
          <div className="row ml-0 mr-0">
          <div className="card-body col-lg-6 border-right">
            <div className="d-flex justify-content-between mb-3">
              Status
              <span className="text-success font-weight-bold"><i className="fa fa-check"></i>{overview.status}</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              Method
              <span className="font-weight-bold">{overview.method}</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              Capacity
              <span className="font-weight-bold">{overview.capacity}</span>
            </div>
            <div className="d-flex justify-content-between">
              Drayage
              <span className="font-weight-bold">{overview.drayage}</span>
            </div>
          </div>
          <div className="card-body col-lg-6 d-flex flex-column">
            <div className="d-flex justify-content-between mb-3">
              Incoterms
              <span className="font-weight-bold">{overview.incoterms}</span>
            </div>
            <div className="d-flex justify-content-between mb-5">
              Service Options
              <span className="font-weight-bold">{overview.serviceOptions}</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              Hazardous or forbidden commoditles
              <span className="font-weight-bold">{overview.hazardousOrForbidden}</span>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
