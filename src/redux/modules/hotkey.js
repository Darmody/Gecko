import { Map, fromJS } from 'immutable';

export const FETCH = 'Gecko/hotkey/FETCH';
export const SWITCH_PANEL = 'Gecko/hotkey/SWITCH_PANEL';

const initialState = new Map({
  'activePanel': 0,
  'keyMap': {
    focusNewCardPanel: 'ctrl+n',
    focusCardListPanel: ['esc', 'ctrl+l'],
    forwardCardUp: 'k',
    forwardCardDown: 'j',
  },
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
    case SWITCH_PANEL:
      return state.set('activePanel', action.currentPanelIndex);
    default:
      return state;
  }
};

export function fetch() {
  return {
    type: FETCH,
  };
}

export function switchPanel(currentPanelIndex) {
  return {
    type: SWITCH_PANEL,
    currentPanelIndex,
  };
}

export default (state = initialState, action = {}) => (reducer(state, action).toJS());
