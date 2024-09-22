import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import arrow from "../../assets/images/right-arrow.png";
import arrowLight from "../../assets/images/light-arrow.png";
import phone from "../../assets/images/call.png";
import phoneLight from "../../assets/images/callLight.png";
import print from "../../assets/images/print.png";
import printLight from "../../assets/images/printLight.png";
import email from "../../assets/images/email.png";
import emailLight from "../../assets/images/envelopeLight.png";
import logo from "../../assets/images/coreTechBlack-01.png";
import lightlogo from "../../assets/images/coreTechWhite-01.png";
import insta from "../../assets/images/instagram.png";
import fb from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import twitterLight from "../../assets/images/twitterLight.png";
import linkedin from "../../assets/images/linkedin.png";
import { ThemeContext } from '../../context/ThemeContext.jsx';

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className= {`footerParent ${darkMode?"footerDarkBg":""}`}>
      <div className="topContainer">
        <div className="footerCols leftCol">
          <h2 className={darkMode?"white":"black"}>ABOUT CORE TECH</h2>
          <p className={darkMode?"grayClr":""}>
            CoreTech is a leading provider of technology solutions for
            businesses. With a focus on delivering the highest quality products
            and services, we help businesses harness the power of technology to
            achieve their goals. Our team of experts is dedicated to driving
            innovation and delivering results that exceed our clients'
            expectations.
          </p>
        </div>
        <div className="footerCols middleCol">
          <div className="footerServicesTop">
            <h2 className={darkMode?"white":"black"}>SERVICES</h2>
            <p>
              {darkMode?<img src={arrowLight} alt="arrow" />:<img src={arrow} alt="arrow" />}
              
              <span className={darkMode?"grayClr":""}>Web Development</span>
            </p>
            <p>
            {darkMode?<img src={arrowLight} alt="arrow" />:<img src={arrow} alt="arrow" />}
              <span className={darkMode?"grayClr":""}>App Development</span>
            </p>
            <p>
            {darkMode?<img src={arrowLight} alt="arrow" />:<img src={arrow} alt="arrow" />}
              <span className={darkMode?"grayClr":""}>Business Solutions</span>
            </p>
            <p>
            {darkMode?<img src={arrowLight} alt="arrow" />:<img src={arrow} alt="arrow" />}
              <span className={darkMode?"grayClr":""}>Block Chain Technology</span>
            </p>
          </div>
          <div className="footerQuickLinks">
            <h2 className={darkMode?"white":"black"}>QUICK LINKS</h2>
            <p>
            {darkMode?<img src={arrowLight} alt="arrow" />:<img src={arrow} alt="arrow" />}
              <span className={darkMode?"grayClr":""}>Privacy Policy</span>
            </p>
            <p>
            {darkMode?<img src={arrowLight} alt="arrow" />:<img src={arrow} alt="arrow" />}
              <span className={darkMode?"grayClr":""}>Terms & Conditions</span>
            </p>
          </div>
        </div>
        <div className="footerCols rightCol">
          <div className="logoAndText">
            {darkMode?<img src={lightlogo} alt="logo" />:<img src={logo} alt="logo" />}
            
            <span className={darkMode?"grayClrTagline":""}>Driving Innovation, Delivering Results</span>
          </div>
          <div className="phoneNo">
            {darkMode?<img src={phoneLight} alt="phone" />:<img src={phone} alt="phone" />}
            
            <span className={darkMode?"grayClr":""}>+91 1234567890</span>
          </div>
          <div className="fax">
            {darkMode? <img src={printLight} alt="fax" />: <img src={print} alt="fax" />}
           
            <span className={darkMode?"grayClr":""}>+91 1234567890</span>
          </div>
          <div className="email">
            {darkMode?<img src={emailLight} alt="fax" />:<img src={email} alt="fax" />}
            
            <span className={darkMode?"grayClr":""}>info@coretech.com</span>
          </div>
        </div>
      </div>
      <div className="copyrightSocialIconContainer">
        <div className={`copyright ${darkMode?"copyrightGray":""}`}>
          Copyright @ 2014 Core Tech Services. All Rights Reserved
        </div>
        <div className="socialIconContainer">
          <div className="socialIcon">
            <Link
              className="socialLogo"
              target="_blank"
              to="https://www.facebook.com/"
            >
              <img src={fb} alt="fb" />
            </Link>
          </div>
          <div className="socialIcon">
            <Link
              className="socialLogo"
              target="_blank"
              to="https://www.linkedin.com/"
            >
               <img src={linkedin} alt="linkedin" />
            </Link>
          </div>
          <div className="socialIcon">
            <Link
              className="socialLogo"
              target="_blank"
              to="https://twitter.com/"
            >
              {darkMode?<img src={twitterLight} alt="twitter" />:<img src={twitter} alt="twitter" />}
               
            </Link>
          </div>
          <div className="socialIcon">
            <Link
              className="socialLogo"
              target="_blank"
              to="https://www.instagram.com/"
            >
              <img src={insta} alt="instagram" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
