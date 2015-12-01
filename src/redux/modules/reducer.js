import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import paper from './paper';
import card from './card';

export default combineReducers({
  form,
  paper,
  card,
});
