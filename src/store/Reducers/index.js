import { combineReducers } from 'redux';
import messagesReducer from './Message';
import userReducer from './User';

const reducers = combineReducers({
  User: userReducer,
  Messages: messagesReducer,
});

export default reducers;
