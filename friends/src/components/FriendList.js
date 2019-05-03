import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';

import {getFriends} from '../actions';
import {connect} from 'react-redux';

import Loader from "react-loader-spinner";
import { withRouter } from "react-router-dom";

class FriendList extends Component {
  state = {
    newFriend: '',
    newFriendAge: '',
    newFriendEmail: '',
  };

  componentDidMount() {
    this.props.getFriends();
  }

  // set up for adding another input field...
  handleChange = e => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
    //   this.setState({newTodo: e.target.value})
  };

  handleSubmit = e => {
    e.preventDefault();


  };




  render() {




    return (
      <div className = "friendContainer">

        {this.props.fetchingData  && (
          <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
        )}

        <form>






        </form>


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
