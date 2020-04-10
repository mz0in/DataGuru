import { combineReducers } from 'redux';
import todo from './todo'
import bitcoin from './bitcoin'

const reducers = combineReducers({
  todo,
  bitcoin
});

export default reducers;