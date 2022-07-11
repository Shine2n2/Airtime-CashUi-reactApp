import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../images/A2Clogo.png";
import LogoText from "../images/Airtime2Cash.png";
import "../registrationUI/registration.css";

const Login = () => {
  return (
    <section className="form__wrapper">
      <div className="form__container">
        <Link to="/">
          <div className="logo">
            <img src={LogoImg} alt="" />
            <img src={LogoText} alt="" />
          </div>
        </Link>
        <h3>Login</h3>

        <form action="">
          <div className="form__group">
            <div className="form__control">
              <label htmlFor="">Email</label>
              <br />
              <input type="text" placeholder="Enter Your Email" />
            </div>

            <div className="form__control">
              <label htmlFor="">Password</label>
              <br />
              <input type="text" placeholder="Confirm Password" />
              <Link to="/forgotPassword" className="forgot">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="btn">
              Login
            </button>

            <div className="question">
              <p>
                Don't have an account?
                <Link to="/register">
                  <span> Create Account </span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
