/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
import 'babel/polyfill';
import ReactDOM from 'react-dom';
import createHistory from 'history/lib/createBrowserHistory';
import createLocation from 'history/lib/createLocation';
import createStore from './redux/create';
import universalRouter from './helpers/universalRouter';

require('react-tap-event-plugin')();
require('../node_modules/flexboxgrid/dist/flexboxgrid.min.css');

const history = createHistory();
const dest = document.getElementById('content');
const store = createStore();
const location = createLocation(document.location.pathname, document.location.search);
const render = (loc, hist, str, preload) => {
  return universalRouter(loc, hist, str, preload)
    .then(({component}) => {
      ReactDOM.render(component, dest);
    }, (error) => {
      console.error(error);
    });
};

history.listen(() => {});

history.listenBefore((loc, callback) => {
  render(loc, history, store, true)
    .then((callback));
});

render(location, history, store, true);
