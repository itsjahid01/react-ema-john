import React from "react";
import "./header.css";
import logo from "../../images/Logo.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <nav>
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/orders">Order</NavLink>
        <NavLink to="/inventory">Inventory</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </header>
  );
};

export default Header;
