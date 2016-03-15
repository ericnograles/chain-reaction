import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import * as common from 'chain-reaction.common';

const store = common.configureStore();

// Stylesheets
require('./assets/styles/main.css');

// Images and icons
require('./assets/images/react-favicon.ico');

ReactDOM.render(
  <Provider store={store}>
    <App store={store} common={common} />
  </Provider>,
  document.getElementById('app')
);