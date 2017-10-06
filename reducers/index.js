import { combineReducers } from 'redux';
import shotsReducers from './shotsReducers';

export default combineReducers(
  Object.assign({}, 
    shotsReducers
  )
);