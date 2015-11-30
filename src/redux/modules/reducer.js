import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { reducer as form } from 'redux-form';
import paper from './paper';
import card from './card';

export default combineReducers({
  router: routerStateReducer,
  form,
  paper,
  card,
});
