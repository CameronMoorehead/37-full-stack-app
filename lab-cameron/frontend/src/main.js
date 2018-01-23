import './style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import App from './component/app';
// import reducer from './reducer';

import session from './lib/redux-session';
import thunk from './lib/redux-thunk';

const store = createStore(
  // reducer,
  composeWithDevTools(
    applyMiddleware(session, thunk)
  )
);

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, container);
