import reducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from  'redux-promise-middleware';
// import { createLogger } from 'redux-logger';
// import thunk from 'redux-thunk';


export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware( promiseMiddleware()))