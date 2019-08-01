import * as actionType from '../actions';

const initialState = {
  token: localStorage.getItem('token'),
  userId: parseInt(localStorage.getItem('userId'), 10),
  card: {
    qr_code: '',
    occupation: '',
    phone: ''
  },
  email: localStorage.getItem('email'),
  error: '',
  gettingCard: false,
  creatingCard: false,
  editingCard: false
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET_CARD
    case actionType.GET_CARD_START:
      return {
        ...state,
        gettingCard: true,
        error: null
      };
    case actionType.GET_CARD_SUCCESS:
      return {
        ...state,
        gettingCard: false,
        card: { ...action.payload.data.data[0] },
        error: null
      };
    case actionType.GET_CARD_ERROR:
      return {
        ...state,
        gettingCard: false,
        error: action.error
      };

    // CARD_ADD
    case actionType.CARD_ADD_START:
      return {
        ...state,
        addingCard: true,
        error: null
      };
    case actionType.CARD_ADD_SUCCESS:
      return {
        ...state,
        addingCard: false,
        card: action.payload.data.data[0],
        error: null
      };
    case actionType.CARD_ADD_ERROR:
      return {
        ...state,
        addingCard: false,
        error: action.error
      };

    // CARD_EDIT
    case actionType.CARD_EDIT_START:
      return {
        ...state,
        editingCard: true,
        error: null
      };
    case actionType.CARD_EDIT_SUCCESS:
      return {
        ...state,
        editingCard: false,
        card: action.payload.data.data[0],
        error: null
      };
    case actionType.CARD_EDIT_ERROR:
      return {
        ...state,
        editingCard: false,
        error: action.error
      };
    default:
      return state;
  }
};
