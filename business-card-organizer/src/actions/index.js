import axios from 'axios';

const axiosOptions = {
  method: 'get',
  baseURL: 'https://bussiness-card-app.herokuapp.com/api/',
  headers: {
    token: localStorage.getItem('token') || ''
  }
};

// LOGIN

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

const POST_LOGIN_URL = 'https://bussiness-card-app.herokuapp.com/api/login';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios({
    ...axiosOptions,
    url: 'login'
  })
    .then(res => {
      const { id, token } = res.data.data[0];
      localStorage.setItem('token', token);
      localStorage.setItem('userId', id);
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
  return axios({
    ...axiosOptions,
    method: 'post',
    data: creds
  })
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REGISTER_ERROR, error: err });
    });
};

// GET USER INFO

export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const getUser = userId => dispatch => {
  dispatch({ type: GET_USER_START });
  return axios({
    ...axiosOptions,
    url: `user/${userId}`
  })
    .then(res => {
      console.log(res);
      dispatch({ type: GET_USER_SUCCESS, payload: res });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_USER_ERROR, error: err });
    });
};

// EDIT USER

export const EDIT_USER_START = 'EDIT_USER_START';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const EDIT_USER_ERROR = 'EDIT_USER_ERROR';

export const editUser = (userId, userInfo) => dispatch => {
  dispatch({ type: EDIT_USER_START });
  return axios({
    ...axiosOptions,
    method: 'post',
    url: `user/${userId}`,
    data: userInfo
  })
    .then(res => {
      console.log(res);
      dispatch({ type: EDIT_USER_SUCCESS, payload: res });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: EDIT_USER_ERROR, error: err });
    });
};

// GET USER EVENTS

export const USER_EVENTS_GET_START = 'USER_EVENTS_GET_START';
export const USER_EVENTS_GET_SUCCESS = 'USER_EVENTS_GET_SUCCESS';
export const USER_EVENTS_GET_ERROR = 'USER_EVENTS_GET_ERROR';

export const getUserEvents = userId => dispatch => {
  dispatch({ type: USER_EVENTS_GET_START });
  return axios({
    ...axiosOptions,
    url: `user/${userId}/event`
  })
    .then(res => {
      console.log(res);
      dispatch({ type: USER_EVENTS_GET_SUCCESS, payload: res });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: USER_EVENTS_GET_ERROR, error: err });
    });
};

// EVENT ADD

export const EVENT_ADD_START = 'EVENT_ADD_START';
export const EVENT_ADD_SUCCESS = 'EVENT_ADD_SUCCESS';
export const EVENT_ADD_ERROR = 'EVENT_ADD_ERROR';

const testData = {
  name_event: 'lambda build week',
  event_date: '2/8/2019',
  event_venue: 'zoom',
  event_location: 'online'
};

export const addEvent = (userId, eventInfo) => dispatch => {
  dispatch({ type: EVENT_ADD_START });
  return axios({
    ...axiosOptions,
    method: 'post',
    url: `user/${userId}/event`,
    data: testData
  })
    .then(res => {
      console.log(res);
      dispatch({ type: EVENT_ADD_SUCCESS, payload: res });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: EVENT_ADD_ERROR, error: err });
    });
};
