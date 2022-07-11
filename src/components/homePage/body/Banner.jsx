import React from "react";
import BannerImg from "../../images/banner.png";
import Step1Img from "../../images/Login.png";
import Step2Img from "../../images/Dashboard.png";
import Step3Img from "../../images/Vector.png";
import { Link } from "react-router-dom";
import "./bodyStyles.css";

const Banner = () => {
  return (
    <section>
      <div className="banner__wrapper">
        <div className="all__container banner__container">
          <h1>
            Surplus Airtime?
            <br />
            Don’t worry we <br /> got you covered
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            quam malesuada in ultrices augue ac maecenas.
          </p>
          <Link to="/login" className="btn getStarted__btn">
            Get Started
          </Link>
        </div>
        <div className="banner__img">
          <img src={BannerImg} alt="banner" width="480px" height="400px" />
        </div>
      </div>

      <div className="all__container">
        <div className="info">
          <h3>Change Surplus Airtime to Real Cash</h3>
          <p>In three simple steps, change airtime to cash</p>
        </div>
        <div className="steps__container">
          <div className="steps">
            <img src={Step1Img} alt="" />
            <h3>Login or Register</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
              quam malesuada in ultrices augue ac maecenas.
            </p>
          </div>
          <div className="steps">
            <img src={Step2Img} alt="" />
            <h3>Deposit From Dashboard</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
              quam malesuada in ultrices augue ac maecenas.
            </p>
          </div>
          <div className="steps">
            <img src={Step3Img} alt="" />
            <h3>Deposit From Dashboard</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
              quam malesuada in ultrices augue ac maecenas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
