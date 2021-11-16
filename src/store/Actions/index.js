export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const FAILED_REQUEST = 'FAILED_REQUEST';
export const NEW_MESSAGE = 'NEW_MESSAGE';

export const userLoginRequest = () => ({
  type: USER_LOGIN_REQUEST,
});

export const userLoginSuccess = (user) => ({
  type: USER_LOGIN_SUCCESS,
  payload: user,
});

export const userRegisterRequest = () => ({
  type: USER_REGISTER_REQUEST,
});

export const userRegisterSuccess = () => ({
  type: USER_REGISTER_SUCCESS,
});

export const failedRequest = (status, error) => {
  return { type: FAILED_REQUEST, payload: { status, error } };
};

export const newMessage = (data) => ({
  type: NEW_MESSAGE,
  payload: data,
});
