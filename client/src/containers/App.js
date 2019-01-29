import React, { Component, PropTypes } from 'react';
import Test from "../pages/test/Test";
import "./App.scss";
import { data } from "../data/data.js";

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(data);
    return (
      <Test data={data} />
    );
  }
}

// App.propTypes = {
//   children: PropTypes.node,
//   user: PropTypes.object,
//   fetchUser: PropTypes.func.isRequired,
//   logout: PropTypes.func.isRequired,
// };



export default App;
