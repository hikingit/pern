import React, { Component } from "react";
import "./Diagram.scss";
import diagram from "../../../../images/diagram.jpg";

export default class Diagram extends Component {

  render() {

    return (
      <div className="diagram">
        <img className="w-100 h-100" src={diagram}/>
      </div>
    );
  }
}
