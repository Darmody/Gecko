import 'babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './routes';

import createStore from './redux/create';
const store = createStore();

require('../static/Roboto.css');
require('../node_modules/flexboxgrid/dist/flexboxgrid.min.css');
require('react-tap-event-plugin')();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('content')
);
