import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ActiveLink from "../Components/ActiveLink/ActiveLink";

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      {/* <ActiveLink to="/friends">Friends</ActiveLink> */}
    </nav>
  );
};

export default Header;
