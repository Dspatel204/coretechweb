import React, { useContext } from "react";
import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import contact from "../../assets/images/contactus.png";
import contactForm from "../../assets/images/Group15.png";
import call from "../../assets/images/call1.png";
import location from "../../assets/images/location-pin.png";
import email from "../../assets/images/email1.png";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <div className="contactContainer">
        <div className="aboutUsLandingContainer">
          <div className="aboutUsLandingImg">
            <img className="contactImg" src={contact} alt="contactImg" />
          </div>
          <div className="aboutUsLandingText">
            <h1>
              <span className="borderFont">Cont</span>
              <span>act Us</span>
            </h1>
            <p className={darkMode ? "darkColor poppinsLight" : ""}>
              Our company offers a comprehensive range of services tailored to
              meet the diverse needs of our clients. From innovative digital
              solutions to traditional marketing strategies, we provide a
            </p>
          </div>
        </div>
        <div className="formMapSectionParent">
            <div className={`formSection ${darkMode?"containerDarkShadow":""}`}>
            <div className="formLeftPart">
              <h1>Get In Touch</h1>
              <p className={darkMode?"white poppinsLight":""}>We are here for you! How can we help?</p>
              <form action="">
                <input type="text" placeholder="Enter your name" />
                <input type="text" placeholder="Enter your email address" />
                <textarea rows="6" class="custom-textarea" placeholder="Go ahead, We are listening"></textarea>

                <button>Submit</button>
              </form>
            </div>
            <div className="formRightPart">
              <img className="formImg" src={contactForm} alt="contactForm" />
              <div className="contactDetails">
                <div className="logoDetailFlex">
                  <div className="circle">
                    <img src={location} alt="location" />
                  </div>
                  <div className={`details ${darkMode?"white poppinsLight":""}`}>
                    16 Plymouth Road, <br /> Braintree, MA 02184
                  </div>
                </div>
                <div className="logoDetailFlex">
                  <div className="circle">
                    <img src={call} alt="call" />
                  </div>
                  <div className={`details ${darkMode?"white poppinsLight":""}`}>
                  (978) 992 0049
                  </div>
                </div>
                <div className="logoDetailFlex">
                  <div className="circle">
                    <img src={email} alt="email" />
                  </div>
                  <div className={`details ${darkMode?"white poppinsLight":""}`}>
                  Coretechllc@icloud.com
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="formSocialIcons">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-linkedin-in"></i>
          <i class="fa-brands fa-x-twitter"></i>
          </div>
            </div>
          
          <div className="mapSection">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.5736959315927!2d72.97113807411004!3d20.768065996683642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0ee691bdc222d%3A0x8601d0112c1f6232!2sNirvana%20Tutoration!5e0!3m2!1sen!2sin!4v1700914206423!5m2!1sen!2sin"
              width="100%"
              height="369"
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="googleMap"
            ></iframe>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
