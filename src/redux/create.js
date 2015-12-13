import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import persistState from 'redux-localstorage';
import createLogger from 'redux-logger';

export default function createStore(data) {
  let finalCreateStore;
  if (__DEVELOPMENT__) {
    finalCreateStore = compose(
      applyMiddleware(createLogger()),
      persistState(['paper', 'card', ])
    )(_createStore);
  } else {
    finalCreateStore = compose(
      applyMiddleware(createLogger()),
      persistState(['paper', 'card', ])
    )(_createStore);
  }

  const reducer = require('./modules/reducer');
  const store = finalCreateStore(reducer, data);

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./modules/reducer', () => {
      store.replaceReducer(require('./modules/reducer'));
    });
  }

  return store;
}


