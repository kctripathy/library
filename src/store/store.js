import allReducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const appStore = createStore(allReducer, applyMiddleware(thunk));

export default appStore;