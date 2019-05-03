import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';

import {getFriends} from '../actions';
import {connect} from 'react-redux';

import Loader from "react-loader-spinner";
import { withRouter } from "react-router-dom";

class FriendList extends Component {

  componentDidMount() {
    this.props.getFriends();

  }


/*
       {this.props.friends.map( (friend, index) => (
          <div key={index}>
            <h5><h5>{friend.name}</h5></h5>

          </div>

        ))}

 */


  render() {
    return (
      <div>
        <h3> Redux Friends</h3>
        {this.props.friends.friends.map( (friend, index) => (
          <div key={index}>
            <h5><h5>{friend.name}</h5></h5>

          </div>

        ))}


      </div>

    )

  }


}

const mapStateToProps = ({ friends, fetchingData }) => ({
  friends,
  fetchingData,

});

export default withRouter(
  connect (
    mapStateToProps,
    {getFriends},


  )(FriendList)


);



/*
function FriendList() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default FriendList;
*/