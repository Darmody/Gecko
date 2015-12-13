import {List, Map, fromJS } from 'immutable';
import max from 'lodash/math/max';
import min from 'lodash/math/min';
import Paper from '../records/paper';

export const CREATE = 'Gecko/paper/CREATE';
export const FETCH = 'Gecko/paper/FETCH';
export const SELECT = 'Gecko/paper/SELECT';

export const CREATE_CARD = 'Gecko/card/CREATE';

const initialState = new Map({
  list: List.of(
    new Paper({ title: 'Gecko'}),
  ),
  currentPaperIndex: 0,
});

const revive = (state) => {
  if (state instanceof Map) {
    return state;
  }

  return fromJS(state);
};

const reducer = (originalState, action) => {
  const state = revive(originalState);

  switch (action.type) {
    case FETCH:
      return state;
    case CREATE:
      return state.updateIn(['list'], list => list.push(action.newRecord));
    case SELECT:
      let index = action.currentPaperIndex;
      index = min([index, state.get('list').length - 1]);
      index = max([index, 0]);
      return state.set('currentPaperIndex', index);
    default:
      return state;
  }
};

export function fetch() {
  return {
    type: FETCH,
  };
}

export function create(newRecord) {
  return {
    type: CREATE,
    newRecord: new Paper(newRecord),
  };
}

export function select(index) {
  return {
    type: SELECT,
    currentPaperIndex: parseInt(index, 10),
  };
}

export function shift(currentIndex, direction) {
  return select(parseInt(currentIndex, 10) + direction);
}

export default (state = initialState, action = {}) => (reducer(state, action).toJS());
