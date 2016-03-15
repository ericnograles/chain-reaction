import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from '../../common/store/configureStore';

const store = configureStore();

// Stylesheets
require('./assets/styles/main.css');

// Images and icons
require('./assets/images/react-favicon.ico');

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('app')
);