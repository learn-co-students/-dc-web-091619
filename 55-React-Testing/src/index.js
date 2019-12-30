
import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import reducers from './redux/reducer'

import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)