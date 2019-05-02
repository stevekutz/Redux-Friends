import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./Login";
import FriendList from "./FriendList";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/login"
        // component={Login}
        render={props => <Login {...props} isLoggingIn={false} />}
      />
      <PrivateRoute exact path="/protected" component={FriendList} />
    </Router>
  );
}

export default App;