import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_RESOLVED = "LOGIN_RESOLVED";

// create action types for getting data
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

//actions types for adding friend
export const ADDING_FRIEND = "ADDING_FRIEND";
export const ADD_FRIEND = "ADD_FRIEND";

// generic action type for any error
export const ERROR = "ERROR";

export const login = creds => dispatch => {
  dispatch({type: LOGIN_START});

  return axios // we post login creds to login server
    .post("http://localhost:5000/api/login", creds)
    .then(res => {
      // local storage stores token passed in
      localStorage.setItem("token", res.data.payload);
    })
    .catch(err => {
      console.log("login err: ", err);
      if (err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: LOGIN_RESOLVED });
    });
};


// build thunkable action creator
export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios // NOTICE DIFFERENT ENDPOINT !!!!!
    .get("http://localhost:5000/api/friends", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      dispatch({
        type: FETCH_DATA_SUCCESS,
        // payload: res.data.data
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
      if (err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
    });
};


export const addFriend = (friend) => dispatch =>{
  dispatch({type: ADDING_FRIEND});
  axios
    .post(`http://localhost:5000/api/friend`, friend)
    .then(res => {
      console.log(res);
      dispatch({
        type: ADD_FRIEND,
        // payload: res.data.data
        payload: res.data
      });
    })
    .catch(err =>{
      dispatch({type: ERROR, payload: err});
    })

};
