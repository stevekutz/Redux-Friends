import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';

import {getFriends, addFriend} from '../actions';
import {connect} from 'react-redux';

import Loader from "react-loader-spinner";
import { withRouter } from "react-router-dom";

class FriendList extends Component {

 /*
  state = {
    newFriendName: '',
    newFriendAge: '',
    newFriendEmail: '',
  };
*/
  state = {
    name: '',
    age: '',
    email: '',
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
    const {name, age,email} = this.state;
    e.preventDefault();
    this.props.addFriend({name, age, email});
    this.setState({
      name: '',
      age: '',
      email: ''
    });

  };


  render() {


    return (
      <div className = "friendContainer">

        {this.props.fetchingData  && (
          <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
        )}

        <form onSubmit = {this.handleSubmit}>
          <input
            value = {this.state.name}
            name = "name"
            type = "text"
            placeholder = "name"
            onChange={this.handleChange}
          />
          <input
            value = {this.state.age}
            name = "age"
            type = "text"
            placeholder = "age"
            onChange={this.handleChange}
          />
          <input
            value = {this.state.email}
            name = "email"
            type = "text"
            placeholder = "email"
            onChange={this.handleChange}
          />
          <button>Add Friend</button>

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


const mapStateToProps = ({ friends, fetchingData, addingFriend }) => ({
  friends,
  fetchingData,
  addingFriend,
});

export default withRouter(
  connect (
    mapStateToProps,
    {getFriends, addFriend},


  )(FriendList)


);
