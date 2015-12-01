import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {
    App,
    PaperList,
  } from 'containers';

export default (
  <Route path="/" component={App} >
    { /* Routes */ }
    <IndexRoute component={PaperList} />
    <Route path="papers" component={PaperList} />
  </Route>
);
