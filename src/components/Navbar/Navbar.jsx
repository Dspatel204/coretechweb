import React, { useContext } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import websitelogolight from "../../assets/images/coreTechWhite-01.png";
import websitelogodark from "../../assets/images/coreTechBlack-01.png";
import moon from "../../assets/images/moonicon.png";
import sun from "../../assets/images/sunicon.png";
import { ThemeContext } from '../../context/ThemeContext.jsx';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  
  return (
    <div className={`navbarBg sticky-top ${!darkMode?"navbarBgLight":""}`}>
      <nav className="navbar navbar-expand-md navTransparent ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <div>
              {darkMode ? (
                <img
                  src={websitelogolight}
                  className="Logo"
                  alt="CoreTech logo"
                />
              ) : (
                <img
                  src={websitelogodark}
                  className="Logo"
                  alt="CoreTech logo"
                />
              )}
            </div>
            {/* <div className="nirvanaTitle">Nirvana Tech Labs</div> */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between text-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 align-items-center space">
              <li className={`nav-item `}>
                <NavLink
                  className={`nav-link ${darkMode ? "white poppinsLight" : "black"} `}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className={`nav-item `}>
                <NavLink
                  className={`nav-link ${darkMode ? "white poppinsLight" : "black"} `}
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li className={`nav-item `}>
                <NavLink
                  className={`nav-link ${darkMode ? "white poppinsLight" : "black"} `}
                  to="/portfolio"
                >
                  Portfolio
                </NavLink>
              </li>

              <li className={`nav-item `}>
                <NavLink
                  className={`nav-link ${darkMode ? "white poppinsLight" : "black"} `}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div
              className={`theme ${darkMode ? "white poppinsLight" : "black"} `}
              onClick={toggleDarkMode}
            >
              {darkMode ? <img src={sun} alt="" /> : <img src={moon} alt="" />}
              {darkMode? "Light":"Dark"}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
