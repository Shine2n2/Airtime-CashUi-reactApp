import React from "react";
import LogoImg from "../../../components/images/A2Clogo.png";
import LogoText from "../../../components/images/Airtime2Cash.png";
import { Link } from "react-router-dom";
import "./nav.css";

const NavBar = () => {
  return (
    <section className="nav__wrapper">
      <div className="nav__container all__container">
          <Link to="/">
        <div className="nav__logo">
            <img src={LogoImg} alt="" />
            <img src={LogoText} alt="" />
        </div>
          </Link>
        <div className="nav__links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <Link className="dashboard" to="/dashboard">
              Dashboard
            </Link>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <Link className="login" to="/login">
              Login
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
