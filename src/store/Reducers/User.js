import {
  FAILED_REQUEST,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../Actions';

export const initialState = {
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      delete state.error;
      return { ...state, loginStatus: 'signin-in' };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loginStatus: 'logged',
        user: action.payload,
      };
    case USER_REGISTER_REQUEST:
      delete state.error;
      return { ...state, registerStatus: 'registering' };
    case USER_REGISTER_SUCCESS:
      return { ...state, registerStatus: 'registered' };
    case FAILED_REQUEST:
      return {
        ...state,
        ...action.payload.status,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default userReducer;
