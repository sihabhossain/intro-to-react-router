// import React, { Children } from "react";
import "./ActiveLink.css";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, Children }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
      {Children}
    </NavLink>
  );
};

export default ActiveLink;
