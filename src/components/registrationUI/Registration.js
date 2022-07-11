import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import LogoImg from "../images/A2Clogo.png";
import LogoText from "../images/Airtime2Cash.png";
import { Link } from "react-router-dom";
import "../registrationUI/registration.css";

const Registration = () => {
  return (
    <section className="form__wrapper">
      <div className="form__container">
        <Link to="/">
          <div className="logo">
            <img src={LogoImg} alt="" />
            <img src={LogoText} alt="" />
          </div>
        </Link>
        <div className="form__link">
          <Link to="/login" >
            <BsArrowLeftShort size={28} />
            Go Back
          </Link>
        </div>
        <h3>Create an Account</h3>

        <form action="">
          <div className="form__group">
            <div className="form__control">
              <label htmlFor="">First Name</label>
              <br />
              <input type="text" placeholder="Enter Your First name" required />
            </div>

            <div className="form__control">
              <label htmlFor="">Email</label>
              <br />
              <input type="text" placeholder="Enter Your Email" />
            </div>

            <div className="form__control">
              <label htmlFor="">Phone Number</label>
              <br />
              <input type="text" placeholder="Enter Your Phone number" />
            </div>

            <div className="form__control">
              <label htmlFor="">Password</label>
              <br />
              <input type="text" placeholder="Confirm Password" />
            </div>

            <button type="submit" className="btn">
              Sign Up
            </button>

            <div className="question">
              <p>
                Already have an account?
                <Link to="/login">
                  <span> Sign In</span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Registration;
