import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Address from './components/address.js';
import Home from './components/home.js';

export default (
  <Router history={ browserHistory }>
    <Route path="/" component={ Home } />
    <Route path="/address" component={ Address } />
  </Router>
);
