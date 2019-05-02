import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_RESOLVED = "LOGIN_RESOLVED";

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