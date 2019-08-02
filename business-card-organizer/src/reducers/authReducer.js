import * as actionType from '../actions';

const initialState = {
  token: localStorage.getItem('token'),
  userId: parseInt(localStorage.getItem('userId'), 10),
  email: localStorage.getItem('email'),
  error: '',
  loggingIn: false,
  registeringUser: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // LOGIN
    case actionType.LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: null
      };
    case actionType.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload.token,
        userId: action.payload.id,
        error: null
      };
    case actionType.LOGIN_ERROR:
      return {
        ...state,
        loggingIn: false,
        error: action.error
      };
    // REGISTER
    case actionType.REGISTER_START:
      return {
        ...state,
        registeringUser: true,
        error: null
      };
    case actionType.REGISTER_SUCCESS:
      return {
        ...state,
        registeringUser: false,
        error: null
      };
    case actionType.REGISTER_ERROR:
      return {
        ...state,
        registeringUser: false,
        error: action.error
      };
    default:
      return state;
  }
};
