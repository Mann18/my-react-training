import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class NewPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      newPassword: "",
      confirmPassword: "",
      error: "",
      isPasswordChanged: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.isLoggedIn);
    if (user) {
      this.setState({ email: user.email });
    }
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { newPassword, confirmPassword } = this.state;
    if (newPassword === "" || confirmPassword === "") {
      this.setState({
        error: "Please enter new password and confirm password",
      });
    } else if (newPassword !== confirmPassword) {
      this.setState({
        error: "New password and confirm password do not match",
      });
    } else {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = users.map((user) => {
        if (user.email === this.state.email) {
          return { ...user, password: newPassword };
        }
        return user;
      });
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      this.setState({ isPasswordChanged: true });
    }
  }

  render() {
    const { isPasswordChanged } = this.state;

    if (isPasswordChanged) {
      return <Navigate to="/login" />;
    }

    return (
      <center>
        <h2>New Password</h2>

        <form onSubmit={this.handleSubmit}>
          <table>
            <tr>
              <td>Email:</td> <td>{this.state.email}</td>
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
          <input type="submit" value="Change Password" />
          <br />
          <Link to="/login">Login</Link>
        </form>
        {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
      </center>
    );
  }
}

export default NewPassword;
