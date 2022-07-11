import React from "react";
import "./bodyStyles.css";
import TouchPad from "../../images/touch-pad.png";
import Alert from "../../images/alert.png";
import Testimonial from "./Testimonial";
import { Link } from "react-router-dom";

const PlatForm = () => {
  return (
    <section>
      <div className="platform__wrapper all__container ">
        <div className="platform__container">
          <div className="platform">
            <h3>The best platform for your convenient airtime exchange</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
              quam malesuada in ultrices augue ac maecenas.
            </p>
            <Link to="/login" className="btn getStarted__btn">
              Get Started
            </Link>
          </div>
          <div className="platform__image">
            <img src={TouchPad} alt="" className="touch__pad" />
            <img src={Alert} alt="" className="alert" />
          </div>
        </div>
        <div className="feedback">
          <h2>Hear what our customers are saying</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            eget ipsum, sed praesent.
          </p>
        </div>
        <Testimonial />
      </div>
    </section>
  );
};

export default PlatForm;
