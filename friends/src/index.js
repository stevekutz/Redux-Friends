import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';


// import * as serviceWorker from './serviceWorker';

// import { logger } from "./logger";  // we don't use our custom built one here

import rootReducer from "./reducers";


import {Provider} from 'react-redux';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import { applyMiddleware, createStore, compose } from "redux";
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// We pass thunk into applyMiddleware and this sets us up to be able to return
// functions out of our action creators rather than returning actions
const enhancer = composeEnhancers(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, enhancer);


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
//document.getElementById('root'));
rootElement);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
