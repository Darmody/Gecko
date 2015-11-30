import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';

export default function createStore(data) {
  const middleware = [createLogger()];

  let finalCreateStore;
  if (__DEVELOPMENT__) {
    finalCreateStore = compose(
      applyMiddleware(...middleware),
    )(_createStore);
  } else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore);
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


