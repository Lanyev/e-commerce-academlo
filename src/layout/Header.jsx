import React from "react";
import { NavLink } from "react-router-dom";
import "./style/header.css";

const Header = () => {
  return (
    <header className="header">
      <NavLink className="header__pageName" to="/">
        <h1 className="header-title">Fake-Commerce</h1>
        <p className="header-phrase">
          Please, dont buy anything, this is a fake store, just for learning
        </p>
      </NavLink>
      <ul className="header__navbar">
        <li className="header__link">
          <NavLink to="/login">
            <i className="bx bx-user"></i>
          </NavLink>
        </li>
        <li className="header__link">
          <NavLink to="/purchases">
            <i className="bx bx-box"></i>
          </NavLink>
        </li>
        <li className="header__link">
          <NavLink to="/cart">
            <i className="bx bx-cart"></i>
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
