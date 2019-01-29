import React, { Component } from "react";

export default class Invoice extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { invoice } = this.props;

    return (
      <div className="invoice mt-3">
        <div className="d-flex align-items-baseline mb-1"><h3 className="font-weight-bold">Invoice</h3> <h5 className="pl-2">{invoice.id}</h5></div>
        <div className="card">
          <div className="card-header bg-white font-weight-bold">INVOICE - REVISION</div>
          <div className="row ml-0 mr-0">
          < div className = "card-body col-lg-3 border-right" >
            <div className="d-flex justify-content-between mb-3">
              Invoice #
              <span className="font-weight-bold">{invoice.number}</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              Date
              <span className="font-weight-bold">{invoice.date}</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              Due Date
              <span className="font-weight-bold">{invoice.dueDate}</span>
            </div>
            <div className="d-flex justify-content-between">
              Terms
              <span className="font-weight-bold">{invoice.terms}</span>
            </div>
          </div>
          <div className="card-body col-lg-6 border-right font-weight-bold">
            Bill To
            <p>{invoice.billTo}</p>
          </div>
          < div className = "card-body col-lg-3 d-flex flex-column font-weight-bold" >
            New Balance upon Re-booking
            <h5 className="font-weight-bold text-warning mt-4">{invoice.newBalance}</h5>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
