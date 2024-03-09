import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
//import "./SignupPage.css";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
      password: "",
      message: "",
    };
  }

  handleSignup = (event) => {
    event.preventDefault();
    const { name, email, mobile, password } = this.state;

    if (name === "" || email === "" || mobile === "" || password === "") {
      this.setState({ message: "Please enter all the fields" });
    } else {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      const isExistingUser = existingUsers.some((user) => user.email === email);
      if (isExistingUser) {
        this.setState({
          message: "Email already exists. Please use a different email.",
        });
      } else {
        const newUser = {
          name: name,
          email: email,
          mobile: mobile,
          password: password,
          isLoggedIn: false,
        };
        existingUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(existingUsers));
        this.setState({
          name: "",
          email: "",
          mobile: "",
          password: "",
          message: "User registered successfully",
        });
      }
    }
  };

  render() {
    const { name, email, mobile, password, message } = this.state;

    return (
      <>
        <div className="signup-container">
          <center>
            <h2>Signup</h2>

            <form onSubmit={this.handleSignup}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label>Name:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) =>
                          this.setState({ name: e.target.value })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Email:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Mobile No:</label>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="mobile"
                        value={mobile}
                        onChange={(e) =>
                          this.setState({ mobile: e.target.value })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Password:</label>
                    </td>
                    <td>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <button type="submit">Signup</button>
              <Link to="/login">Login</Link>
            </form>
            <p>{message}</p>
          </center>
        </div>
        <Footer />
      </>
    );
  }
}

export default SignupPage;
