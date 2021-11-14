import { combineReducers } from 'redux';
import userReducer from './User';

const reducers = combineReducers({
  User: userReducer,
});

export default reducers;
