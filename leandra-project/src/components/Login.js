import { connect } from "react-redux";
import React, { Component } from "react";
import { readUser, setUser } from "../store/action";
import Forked from './Forked';
import Pull from './Pull';

class Login extends Component {
  render() {
    const onSubmitFunc = event => {
      event.preventDefault();
      this.props.readUser(this.props.user);
    };

    const forkedRepos = events => {
      return events
        ? events.filter(event => event.type === "ForkEvent")
        : "";
    };

    const pullRepos = events => {
      return events
        ? events.filter(event => {
          return event.type === "PullRequestEvent"
        })
        : "";
    };

    //TODO: error handling if no such user

    return (
      <>
        <h1>Enter a Github User name:</h1>
        <form onSubmit={onSubmitFunc}>
          <input
            type="text"
            name="userId"
            id=""
            onChange={this.props.setUser}
          />
          <button type="submit">Submit</button>
        </form>
        <Forked forkRepos = {forkedRepos(this.props.events)}/>
        <Pull pullRepos={pullRepos(this.props.events)}/>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  events: state.events
});

const mapDispatchToProps = {
  readUser,
  setUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
