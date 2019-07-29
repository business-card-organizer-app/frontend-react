import axios from 'axios';

// LOGIN

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

const POST_LOGIN_URL = 'https://bussiness-card-app.herokuapp.com/api/login';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post(POST_LOGIN_URL, creds)
    .then(res => {
      localStorage.setItem('token', res.data.data[0].token);
      localStorage.setItem('email', creds.email);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.data[0] });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_ERROR, error: err });
    });
};

// REGISTER

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

const POST_REGISTER_URL =
  'https://bussiness-card-app.herokuapp.com/api/register';

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  return axios
    .post(POST_REGISTER_URL, creds)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REGISTER_ERROR, error: err });
    });
};