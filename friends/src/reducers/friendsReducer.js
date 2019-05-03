import {
  LOGIN_START,
  LOGIN_RESOLVED,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE, ADDING_FRIEND, ADD_FRIEND,


} from "../actions";

const initialState = {
  friends: [],
  isLoggingIn: false,
  error: '',
  fetchingData: false,
  addingFriend: false,
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
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload
      };

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


    default:
      return state;

  }

};