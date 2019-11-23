import { createActions } from 'redux-actions';

export const { auth } = createActions({
  AUTH: {
    LOGIN: (email, password) => ({ email, password }),
    LOGIN_RESPONSE: (token) => ({ token }),

    SIGNUP: () => ({ }),
    SIGNUP_RESPONSE: () => ({ }),

    LOGOUT: () => ({ }),
  }
})