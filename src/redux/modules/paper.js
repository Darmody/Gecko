import {List, Map, fromJS } from 'immutable';
import Paper from '../records/paper';

export const CREATE = 'Gecko/paper/CREATE';
export const FETCH = 'Gecko/paper/FETCH';
export const SELECT = 'Gecko/paper/SELECT';

export const CREATE_CARD = 'Gecko/card/CREATE';

const initialState = new Map({
  list: List.of(new Paper({ title: 'Gecko'}), new Paper({ title: 'Jarvis' })),
  currentPaperIndex: '0',
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
      return state.set('currentPaperIndex', action.currentPaperIndex);
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
    currentPaperIndex: index,
  };
}

export default (state = initialState, action = {}) => (reducer(state, action).toJS());
