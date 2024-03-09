import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import "./Homepage.css";
import Navigation from "./Navigation";
import Footer from "./Footer";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      logoutClicked: false,
    };
  }

  componentDidMount() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = users.find((user) => user.isLoggedIn);

    if (currentUser) {
      this.setState({ userName: currentUser.name });
    }
  }

  handleLogoutClick = () => {
    this.setState({ logoutClicked: true });
  };

  render() {
    const { userName, logoutClicked } = this.state;

    if (logoutClicked) {
      return <Logout />;
    }

    return (
      <>
        <Navigation />
        <div className="homepage-container">
          <h2>Homepage</h2>
          {userName && <p>Hello, {userName}!</p>}
          <Link to="/homepage/changepassword">Change Password</Link>
          <button onClick={this.handleLogoutClick}>Logout</button>
        </div>
        <Footer />
      </>
    );
  }
}

export default Homepage;
