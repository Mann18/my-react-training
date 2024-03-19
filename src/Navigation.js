import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink exact to="/homepage" activeClassName="active">
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink to="/counter" activeClassName="active">
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink to="/userdetails" activeClassName="active">
            User Details
          </NavLink>
        </li>
        <li>
          <NavLink to="/colourchanger" activeClassName="active">
            Colour Changer
          </NavLink>
        </li>
        <li>
          <NavLink to="/calculator" activeClassName="active">
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink to="/todo" activeClassName="active">
            Todo App
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" activeClassName="active">
            News
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
