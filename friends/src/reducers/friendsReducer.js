import {
  LOGIN_START,
  LOGIN_RESOLVED,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
//  FETCH_DATA_FAILURE,   // made one ERROR for all cases
  ERROR,
  ADDING_FRIEND,
  ADD_FRIEND,
  DELETING_FRIEND,
  DELETE_FRIEND

} from "../actions";

const initialState = {
  friends: [],
  isLoggingIn: false,
  error: '',
  fetchingData: false,
  addingFriend: false,
  deletingFriend: false,
};


export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        isLoggingIn: true
      };
    }
    case LOGIN_RESOLVED: {
      return {
        ...state,
        isLoggingIn: false
      };
    }

    case FETCH_DATA_START:
      return {
        ...state,
        error: '',
        fetchingData: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingData: false,
        isLoggingIn: false,
        friends: action.payload,
      };
 //   case FETCH_DATA_FAILURE:


    case ADDING_FRIEND:
      return {
        ...state,
        addingFriend: true,
      };
    case ADD_FRIEND:
      return {
        ...state,
        addingFriend: false,
        friends: action.payload,
      };

    case DELETING_FRIEND:
      return {
        ...state,
        deletingFriend: true,
      };
    case DELETE_FRIEND:
      return {
        ...state,
        deletingFriend: false,
        friends: action.payload,
      };

    case ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;

  }

};