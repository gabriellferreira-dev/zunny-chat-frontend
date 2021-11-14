import {
  failedRequest,
  userLoginRequest,
  userLoginSuccess,
  userRegisterRequest,
  userRegisterSuccess,
} from '../Actions';

export const userLogin = (user) => async (dispatch) => {
  dispatch(userLoginRequest());
  const response = await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });

  const data = await response.json();

  if (!response.ok) {
    return dispatch(failedRequest({ loginStatus: 'failed' }, data.error));
  }

  return dispatch(userLoginSuccess(data));
};

export const userRegister = (user) => async (dispatch) => {
  dispatch(userRegisterRequest());

  const response = await fetch('http://localhost:3001/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });

  const data = await response.json();

  if (!response.ok) {
    return dispatch(failedRequest({ registerStatus: 'failed' }, data.error));
  }

  return dispatch(userRegisterSuccess());
};
