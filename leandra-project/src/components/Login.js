import { connect } from "react-redux";
import React, { Component } from "react";
import { readUser, setUser } from "../store/action";

class Login extends Component {
  render() {
    const onSubmitFunc = event => {
      event.preventDefault();
      this.props.readUser(this.props.user);
    };
    return (
      <>
        <p>hi</p>
        <form onSubmit={onSubmitFunc}>
          <input
            type="text"
            name="userId"
            id=""
            onChange={this.props.setUser}
          />
          <button type="submit">Submit</button>
        </form>
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
