import * as actionType from '../actions';

const initialState = {
  userId: parseInt(localStorage.getItem('userId'), 10),
  gettingCardCollection: false,
  addingCardCollection: false,
  collection: [],
  error: ''
};

export const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET_CARD_COLLECTION
    case actionType.GET_CARD_COLLECTION_START:
      return {
        ...state,
        gettingCardCollection: true,
        error: null
      };
    case actionType.GET_CARD_COLLECTION_SUCCESS:
      return {
        ...state,
        gettingCardCollection: false,
        collection: [...action.payload.data.data],
        error: null
      };
    case actionType.GET_CARD_COLLECTION_ERROR:
      return {
        ...state,
        gettingCardCollection: false,
        error: action.error
      };

    // ADD_CARD_COLLECTION
    case actionType.ADD_CARD_COLLECTION_START:
      return {
        ...state,
        addingCardCollection: true,
        error: null
      };
    case actionType.ADD_CARD_COLLECTION_SUCCESS:
      return {
        ...state,
        addingCardCollection: false,
        collection: [...action.payload.data.data],
        error: null
      };
    case actionType.ADD_CARD_COLLECTION_ERROR:
      return {
        ...state,
        addingCardCollection: false,
        error: action.error
      };
    default:
      return state;
  }
};
