import React from 'react';
import ReactDOM from 'react-dom';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, withRouter } from 'react-router-dom';

import { history } from './helpers';
import { default as rootReducer } from './reducers';

import App from './App';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <AppWithRouter />
    </Router>
  </Provider>,
  document.getElementById('root')
);
