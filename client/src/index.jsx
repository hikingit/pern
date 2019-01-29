import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';

import Root from './containers/Root';

/* eslint-disable import/no-unresolved */
require('file?name=[name].[ext]!./index.html');
/* eslint-enable import/no-unresolved */

render(
  <Root history={browserHistory}/>,
  document.getElementById('root')
);
