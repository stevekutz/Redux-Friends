import React from "react";
import {Route, Redirect} from "react-router-dom";


// !!!! NOT NEEDED for THIS IMPLEMENTATION !!!!
// import { Route, Redirect, withRouter } from "react-router-dom";
// import { connect } from "react-redux";

// Requires:
// 1. It has the API as <Route />
// 2. It renders a <Route /> and passes all the
// props through to Route
// 3. it check is the user is authenticated,
// if they are, it renders the "component" prop
// if not, it redirects to /login.

// deconstruct props
// take name of component being passed and rename with C
// so that we can render it
//   everything else is define is spread into the vriable therest

const PrivateRoute = ({ component: Genericomponent, ...therest }) => {
  return (
    <Route
      {...therest} // the props sent in via render prop !!!
      render={() => {
        //  if token exists, we return component passed in (e.g. GasPrices)
        if (localStorage.getItem("token")) {
          return <Genericomponent />;
        } else {
          console.log("redirecting back to Login !!!!");
          console.log("therest ", therest);
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;