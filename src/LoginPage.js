import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import "./LoginPage.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      error: "",
    };
  }

  handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      user.isLoggedIn = true; 
      localStorage.setItem("users", JSON.stringify(users)); 
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ error: "Invalid email or password" });
    }
  };

  render() {
    const { isLoggedIn, error } = this.state;

    if (isLoggedIn) {
      return <Navigate to="/homepage" />;
    }

    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={this.handleLogin}>
          <table>
            <tr>
              <td>
                <label>Email:</label>
              </td>
              <td>
                <input type="text" name="email" placeholder="Enter Email" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Password:</label>
              </td>
              <td>
                {" "}
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                />
              </td>
            </tr>
            <button type="submit">Login</button>
          </table>
          <div className="signup-link">
            Don't have an account? <Link to="/signup">Signup</Link>
          </div>
          <div className="forgot-password-link">
            <Link to="/resetpassword">Forgot Password</Link>
          </div>
          {error && <p>{error}</p>}
        </form>
      </div>
    );
  }
}

export default LoginPage;
