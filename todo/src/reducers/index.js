import { combineReducers } from 'redux';
import todos from './todos';
import addtodoReducer from './addtodoReducer';

const allReducers = combineReducers({
  todos: todos,
  addtodoReducer
})

export default allReducers;
