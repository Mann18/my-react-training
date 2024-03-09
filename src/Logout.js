import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedOut: false,
    };
  }

  componentDidMount() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUserIndex = users.findIndex((user) => user.isLoggedIn);

    if (currentUserIndex !== -1) {
      users[currentUserIndex].isLoggedIn = false;
      localStorage.setItem("users", JSON.stringify(users));
      this.setState({ loggedOut: true });
    }
  }

  render() {
    const { loggedOut } = this.state;

    if (loggedOut) {
      return <Navigate to="/login" />;
    }

    return <div>Logging out...</div>;
  }
}

export default Logout;
