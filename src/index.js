import 'babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './routes';

import createStore from './redux/create';
const store = createStore();

require('react-tap-event-plugin')();
require('../node_modules/flexboxgrid/dist/flexboxgrid.min.css');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('content')
);
