import { combineReducers } from 'redux';
import bookReducer from './components/Books/BookReducer'

const allReducer = combineReducers({
    bookReducer: bookReducer
});

export default allReducer;
