import React from "react";
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import '../registrationUI/registration.css'

const CheckEmail= () => {
  return (
    <section className="form__wrapper">
      <div className="form__container">
        <div className="email__icon">
        <MdOutlineMarkEmailRead size={70}/>
      <h3>Check your mail</h3>
      
      <p>We sent a password reset link to your email. Please click the link to reset your password</p>

      <p>Don't receive the email?<a href="#login"> Click to Resend link</a></p>
      </div>
      
      <button type="submit" className="btn">Reset Password</button>
      </div>
    </section>
  );
};

export default CheckEmail;
