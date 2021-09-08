import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import  thunkMiddleware  from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger'
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './Containers/App';
import 'tachyons';
import { searchRobots, requestRobots } from './reducer';
import * as serviceWorker from './serviceWorker'; 
import fetch from 'node-fetch';

const logger = createLogger();
const rootReducer = combineReducers({searchRobots,requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger))
if (!globalThis.fetch) {
	globalThis.fetch = fetch;
}
ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>,document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.register();
reportWebVitals();
