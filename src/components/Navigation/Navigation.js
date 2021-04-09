import React from "react";
import { NavLink } from "react-router-dom";
// import Feed from "../Feed/Feed";
import Logo from "../Logo/Logo";
// import Profile from "../Profile/Profile";
// import Users from "../Users/Users";
import "./Navigation.css";

function Navigation() {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        margin: "0% 10%",
        width: "80%",
        height: 1,
        boxShadow: '0px 1px 7px 1px rgb(224, 224, 224)',

      }}
    />
  );

  return (
    <>
      <div className="navigation">
        <Logo className="logo" />

        <div className="nav_elements">
          <NavLink
            className="navbar_element"
            exact
            activeClassName="active_navbar_element"
            to="/feed"
          >
            Feed
          </NavLink>
          <NavLink
            className="navbar_element"
            exact
            activeClassName="active_navbar_element"
            to="/users"
          >
            Users
          </NavLink>
          <NavLink
            className="navbar_element"
            exact
            activeClassName="active_navbar_element"
            to="/profile"
          >
            Profile
          </NavLink>
        </div>
      </div>
      <div className="line">
        <ColoredLine color="rgb(224, 224, 224)" />
      </div>
    </>
  );
}

export default Navigation;
