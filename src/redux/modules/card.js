import { List, Map, fromJS } from 'immutable';
import Card from '../records/card';

export const CREATE = 'Gecko/card/CREATE';
export const FETCH = 'Gecko/card/FETCH';

const initialState = new Map({
  '0': new List()
});

const revive = (state) => {
  if (state instanceof Map) {
    return state;
  }

  return fromJS(state);
};

const reducer = (originalState, action = {}) => {
  const state = revive(originalState);

  switch (action.type) {
    case FETCH:
      return state;
    case CREATE:
      return state.updateIn([action.currentPaperIndex.toString()], list => {
        if (list) return list.push(action.newRecord);
        return List.of(action.newRecord);
      });
    default:
      return state;
  }
};

export function fetch() {
  return {
    type: FETCH,
  };
}

export function create(currentPaperIndex, newRecord) {
  return {
    type: CREATE,
    currentPaperIndex,
    newRecord: new Card(newRecord),
  };
}

export default (state = initialState, action = {}) => (reducer(state, action).toJS());
