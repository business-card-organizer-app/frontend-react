import * as actionType from '../actions';

const initialState = {
  token: localStorage.getItem('token'),
  userId: parseInt(localStorage.getItem('userId'), 10),
  error: '',
  eventsForUser: [],
  gettingUserEvents: false,
  gettingEvent: false,
  editingEvent: false,
  addingEvent: false
};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    // EVENT_ADD
    case actionType.EVENT_ADD_START:
      return {
        ...state,
        addingEvent: true,
        error: null
      };
    case actionType.EVENT_ADD_SUCCESS:
      return {
        ...state,
        addingEvent: false,
        error: null
      };
    case actionType.EVENT_ADD_ERROR:
      return {
        ...state,
        addingEvent: false,
        error: action.error
      };

    // USER_EVENTS_GET
    case actionType.USER_EVENTS_GET_START:
      return {
        ...state,
        gettingUserEvents: true,
        error: null
      };
    case actionType.USER_EVENTS_GET_SUCCESS:
      return {
        ...state,
        gettingUserEvents: false,
        eventsForUser: action.payload.data.data,
        error: null
      };
    case actionType.USER_EVENTS_GET_ERROR:
      return {
        ...state,
        gettingUserEvents: false,
        error: action.error
      };

    // // EDIT_EVENT
    // case actionType.EDIT_EVENT_START:
    //   return {
    //     ...state,
    //     editingEvent: true,
    //     error: null
    //   };
    // case actionType.EDIT_EVENT_SUCCESS:
    //   return {
    //     ...state,
    //     editingEvent: false,
    //     error: null
    //   };
    // case actionType.EDIT_EVENT_ERROR:
    //   return {
    //     ...state,
    //     editingEvent: false,
    //     error: action.error
    //   };
    default:
      return state;
  }
};
