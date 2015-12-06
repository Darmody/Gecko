import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import card from './card';
import hotkey from './hotkey';
import paper from './paper';

export default combineReducers({
  card,
  form,
  hotkey,
  paper,
});
