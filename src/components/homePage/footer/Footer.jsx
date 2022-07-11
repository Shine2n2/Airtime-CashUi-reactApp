import React from "react";
import Flogo from "../../images/f-logo.png";
import LogoText from "../../images/footer.png";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer__wrappper">
        <div className="footer__container">
          <div className="footer__logo">
            <img src={Flogo} alt="" />
            <img src={LogoText} alt="" />
          </div>
          <div className="footer__links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="#about">About Airtime 2 Cash</Link>
              </li>
              <li>
                <Link to="#contact">Contact</Link>
              </li>
            </ul>
          </div>
          <hr className="horizontal" />

          <div className="footer__socials">
            <p>&copy; 2022 Airtime2Cash. All Rights Reserved</p>
            <div className="socials">
              <ul>
                <li>
                  <a href="#insta">
                    <FiInstagram />
                  </a>
                </li>
                <li>
                  <a href="#insta">
                    <FiTwitter />
                  </a>
                </li>
                <li>
                  <a href="#insta">
                    <FiYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
