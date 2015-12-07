import { List, Map, fromJS } from 'immutable';
import Card from '../records/card';

export const CREATE = 'Gecko/card/CREATE';
export const DESTROY = 'Gecko/card/DESTROY';
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
        if (list) return list.unshift(action.newRecord);
        return List.of(action.newRecord);
      });
    case DESTROY:
      return state.updateIn([action.currentPaperIndex.toString()], list => {
        const cardIndex = action.currentCardIndex;
        if (list) return list.splice(cardIndex, 1);
        return new List;
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

export function destroy(currentPaperIndex, currentCardIndex) {
  return {
    type: DESTROY,
    currentPaperIndex,
    currentCardIndex,
  };
}


export default (state = initialState, action = {}) => (reducer(state, action).toJS());
