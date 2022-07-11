import React from "react";
import LogoImg from "../images/A2Clogo.png";
import LogoText from "../images/Airtime2Cash.png";
import '../registrationUI/registration.css'

const ResetPassword = () => {
  return (
    <section className="form__wrapper">
      <div className="form__container">
        <div className="logo">
        <img src={LogoImg} alt="" />
        <img src={LogoText} alt="" />
        </div>
      <h3>Reset Password</h3>

      <form action="">
        <div className="form__group">
            
            <div className="form__control">
             <label htmlFor="">New Password</label><br/>
             <input type="text" placeholder="Enter new password" />
            </div>

            <div className="form__control">
             <label htmlFor="">Password</label><br/>
             <input type="text" placeholder="Confirm Password" />
            </div>

           <button type="submit" className="btn">Reset Password</button>

           
            
        </div>
      </form>
      </div>
    </section>
  );
};

export default ResetPassword;
