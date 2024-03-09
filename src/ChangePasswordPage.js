import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class ChangePasswordPage extends Component {
  constructor(props) {
    super(props);
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInUser = users.find((user) => user.isLoggedIn) || {};
    this.state = {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      isPasswordChanged: false,
      loggedInUserPassword: loggedInUser.password || "",
      errorMsg: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleChangePassword() {
    const { oldPassword, newPassword, confirmPassword, loggedInUserPassword } =
      this.state;
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (oldPassword === "" || newPassword === "" || confirmPassword === "") {
      this.setState({ errorMsg: "Please enter all the fields" });
    } else {
      const loggedInUser = users.find((user) => user.isLoggedIn);
      if (!loggedInUser) {
        this.setState({ errorMsg: "No user is currently logged in" });

        return;
      }

      if (oldPassword !== loggedInUserPassword) {
        this.setState({ errorMsg: "Old password does not match" });
      } else if (newPassword !== confirmPassword) {
        this.setState({
          errorMsg: "New password and confirm password do not match",
        });
      } else {
        const updatedUsers = users.map((user) => {
          if (user.isLoggedIn) {
            return {
              ...user,
              password: newPassword,
            };
          }
          return user;
        });

        localStorage.setItem("users", JSON.stringify(updatedUsers));
        this.setState({
          errorMsg: "Password changed successfully",
        });

        this.setState({ isPasswordChanged: true }, () => {
          window.location.href = "/login";
        });
      }
    }
  }

  render() {
    const { isPasswordChanged } = this.state;

    if (isPasswordChanged) {
      return <Navigate to="/loginSignup/homepage" />;
    }
    return (
      <center>
        <h2>Change Password</h2>
        <table>
          <tr>
            <td>Old Password:</td>
            <td>
              <input
                type="password"
                name="oldPassword"
                value={this.state.oldPassword}
                onChange={this.handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>New Password:</td>
            <td>
              <input
                type="password"
                name="newPassword"
                value={this.state.newPassword}
                onChange={this.handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>Confirm Password:</td>
            <td>
              <input
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleInputChange}
              />
            </td>
          </tr>
        </table>
        <input
          type="button"
          value="Change Password"
          onClick={this.handleChangePassword}
        />
        &nbsp;
        <br />
        <Link to="/homepage">Back to Home</Link>
        <br />
        {this.state.errorMsg}
      </center>
    );
  }
}

export default ChangePasswordPage;
