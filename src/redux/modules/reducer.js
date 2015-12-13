import { combineReducers } from 'redux';
import card from './card';
import hotkey from './hotkey';
import paper from './paper';

export default combineReducers({
  card,
  hotkey,
  paper,
});
