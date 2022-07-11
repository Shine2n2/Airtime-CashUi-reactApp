import React from "react";
import { Link } from "react-router-dom";
import "../registrationUI/registration.css";

const ForgetPassword = () => {
  return (
    <section className="form__wrapper">
      <div className="form__container">
        <h3 className="forget__password">Forget Password</h3>

        <form action="">
          <div className="form__group ">
            <div className="form__control">
              <span>
                Enter the email associated with your account and we’ll send an
                email with instruction to reset your password
              </span>
              <br />
              <br />

              <label htmlFor="">Email</label>
              <br />
              <input type="text" placeholder="Enter Your Email" />
            </div>

            <button type="submit" className="btn">
              <Link to="/resetPassword" className="reset__btn">
                Reset Password
              </Link>
            </button>

            <div className="question back__login">
              <Link to="/login">Back to Login</Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgetPassword;
