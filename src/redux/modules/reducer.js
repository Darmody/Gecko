import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import paper from './paper';
import card from './card';

export default combineReducers({
  router: routerStateReducer,
  paper,
  card,
});
