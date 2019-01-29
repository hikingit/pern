import React, { Component } from "react";
import "./Map.scss";
import map from "../../../../images/map.png";

export default class Map extends Component {

  render() {
    return (
      <div className="map">
        <img className="w-100 h-100" src={map}/>
      </div>
    );
  }
}
