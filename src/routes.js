import React from 'react';
import {Route} from 'react-router';
import {
    App,
    PaperList,
  } from 'containers';

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Routes */ }
      <Route path="papers" component={PaperList}/>
    </Route>
  );
};
