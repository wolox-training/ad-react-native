import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import App from './screens/App';
import './fonts/roboto.css';
import wBookApp from './redux/reducers';
import { fetchBooks } from './redux/asyncActions';

const loggerMiddleware = createLogger();

const store = createStore(
  wBookApp,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

store.dispatch(fetchBooks());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
