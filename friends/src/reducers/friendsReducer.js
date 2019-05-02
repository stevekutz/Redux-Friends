import {
  LOGIN_START,




} from "../actions";

const initialState = {
  friends: [],
  isLoggingIn: false,
  error: ''


};


export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        isLoggingIn: true
      }
    }


    default:
      return state;

  }

};