import React, { Component } from "react";
import Invoice from "../../components/test/invoice/Invoice";
import Text from "../../components/test/text/Text";
import OverView from "../../components/test/overView/OverView";
import dashIcon from "../../images/icon.png";
import "./Test.scss";

export default class Test extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    console.log("data on page", data.invoice);

    return (
      <section name="Test">
        <nav className="navbar navbar-expand-lg justify-content-between">
          <div className="container justify-content-between">
            <div className="d-flex align-items-center">
              <a className="navbar-brand" href="#">
                <img className="icon mr-2" src={dashIcon} />
                  Dashboard
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Network</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Network</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Network</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Network</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Network</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Billing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Network</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex align-items-center">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fa fa-search text-muted"/></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fa fa-question-circle text-muted"/></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fa fa-bell"/></a>
                  </li>
                  <div className="dropdown-divider"></div>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="aux-dropdown border rounded-circle mr-1 text-secondary">JS</span>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
              </div>
          </div>
        </nav>
        <div className="aux-content pt-1">
          <div className="container h-100">
            <Invoice invoice={data.invoice}  />
            <Text />
            <OverView overview={data.overview} />
          </div>
        </div>
      </section>
    );
  }
}
