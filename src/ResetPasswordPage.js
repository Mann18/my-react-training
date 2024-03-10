import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import "./ResetPasswordPage.css"; 

class ResetPasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      error: "",
      isEmailMatched: false,
    };
  }

  handleReset = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (email === "") {
      this.setState({ error: "Please enter email" });
      return;
    }

    const matchedUser = users.find((user) => user.email === email);

    if (!matchedUser) {
      this.setState({ error: "Email not found" });
      return;
    }

    this.setState({ isEmailMatched: true });
  };

  render() {
    const { email, error, isEmailMatched } = this.state;

    if (isEmailMatched) {
      return <Navigate to="/enternewpass" />;
    }

    return (
      <div className="reset-container">
        <h2>Reset Password</h2>
        <form onSubmit={this.handleReset}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <br />
          <button type="submit">Reset</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    );
  }
}

export default ResetPasswordPage;
