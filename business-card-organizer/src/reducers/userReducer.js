import * as actionType from '../actions';

const initialState = {
  token: localStorage.getItem('token'),
  userId: parseInt(localStorage.getItem('userId'), 10),
  user: { id: -1, email: '', password: '', first_name: '', last_name: '' },
  error: '',
  gettingUser: false,
  editingUser: false,
  editingUserImage: false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET_USER
    case actionType.GET_USER_START:
      return {
        ...state,
        gettingUser: true,
        error: null
      };
    case actionType.GET_USER_SUCCESS:
      return {
        ...state,
        gettingUser: false,
        user: { ...action.payload.data.data[0] },
        userId: parseInt(action.payload.data.data[0].id, 10),
        error: null
      };
    case actionType.GET_USER_ERROR:
      return {
        ...state,
        gettingUser: false,
        error: action.error
      };

    // EDIT_USER
    case actionType.EDIT_USER_START:
      return {
        ...state,
        editingUser: true,
        error: null
      };
    case actionType.EDIT_USER_SUCCESS:
      return {
        ...state,
        editingUser: false,
        error: null
      };
    case actionType.EDIT_USER_ERROR:
      return {
        ...state,
        editingUser: false,
        error: action.error
      };

    // EDIT_USER_IMAGE
    case actionType.EDIT_USER_IMAGE_START:
      return {
        ...state,
        editingUserImage: true,
        error: null
      };
    case actionType.EDIT_USER_IMAGE_SUCCESS:
      return {
        ...state,
        editingUserImage: false,
        error: null
      };
    case actionType.EDIT_USER_IMAGE_ERROR:
      return {
        ...state,
        editingUserImage: false,
        error: action.error
      };
    default:
      return state;
  }
};
