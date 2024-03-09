import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import CounterApp from "./CounterApp";
import LoginPage from "./LoginPage";
import SignupForm from "./SignupForm";
import ResetPassword from "./ResetPassword";
import NewPassword from "./NewPassword";
import ChangePassword from "./ChangePassword";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <Router>
      <Navigation />
      <div className="home-container">
        <Switch>
          <Route path="/" exact component={CounterApp} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/resetpassword" component={ResetPassword} />
          <Route path="/enternewpass" component={NewPassword} />
          <Route path="/homepage/changepassword" component={ChangePassword} />
          <Route path="/homepage" component={Homepage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default Home;
