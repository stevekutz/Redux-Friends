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


  render() {

    return (
      <div className = "friendContainer">
        <h3 className = "title"> Redux Friends</h3>
        {this.props.friends.friends.map( (friend) => (
          <div
            className = "friendItem"
            key={friend.id}>
            <h5>Name: {friend.name}</h5>
            <h5>Age: {friend.age}</h5>
            <h6>email: {friend.email}</h6>
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
