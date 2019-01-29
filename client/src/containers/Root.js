import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App';

require('./Root.scss');

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;

    return (
        <div>
          <Router history={history}>
            <Route path="/" component={App}/>
          </Router>
        </div>
    );
  }
}

// Root.propTypes = {
//   history: PropTypes.object.isRequired,
// };
