import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignupPage from "./SignupPage";
import ResetPasswordPage from "./ResetPasswordPage";

import ChangePasswordPage from "./ChangePasswordPage";
import Homepage from "./Homepage";
import Logout from "./Logout";
import CounterApp from "./CounterApp";
import LoginPage from "./LoginPage";
import NewPassword from "./NewPassword";
import ColorChanger from "./ColorChanger";
import UserDetails from "./UserDetails";
import Calculator from "./Calculator";
import Todo from "./Todo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/resetpassword" element={<ResetPasswordPage />} />
        <Route path="/enternewpass" element={<NewPassword />} />
        <Route
          path="/homepage/changepassword"
          element={<ChangePasswordPage />}
        />
        <Route path="/homepage" element={<Homepage />} />

        <Route path="/userdetails" element={<UserDetails />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/counter" element={<CounterApp />} />
        <Route path="/colourchanger" element={<ColorChanger />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
};

export default App;
