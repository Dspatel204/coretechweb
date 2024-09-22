import React, { useContext, useState } from "react";
import "./Portfolio.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import aboutImg from "../../assets/images/portfolio94.png";
import portfolioData from '../../assets/utils/portfolioData.js'

const Portfolio = () => {
  const { darkMode } = useContext(ThemeContext);
  const [filter, setFilter] = useState(portfolioData);

  const filterProduct = (cat) => {
    if (cat === "all") {
      setFilter(portfolioData);
    } else {
      const updateList = portfolioData.filter((x) => x.category === cat);
      setFilter(updateList);
    }
  };  

  return (
    <>
      <Navbar />
      <div className="aboutContainer pb-5">
        <div className="aboutUsLandingContainer">
          <div className="aboutUsLandingImg">
            <img src={aboutImg} alt="aboutImg" />
          </div>
          <div className="aboutUsLandingText">
            <h1>
              <span>Port</span>
              <span className="borderFont">folio</span>
            </h1>
            <p className={darkMode ? "darkColor poppinsLight" : ""}>
              Our company offers a comprehensive range of services tailored to
              meet the diverse needs of our clients. From innovative digital
              solutions to traditional marketing strategies, we provide a
              complete suite of services designed to help businesses thrive in
              today's competitive landscape. Our expertise spans across areas
              such as web development, mobile app development, graphic design,
              content creation, social media management, SEO optimization, and
              more.
            </p>
          </div>
        </div>
        <div className="ourPortFolioParent">
          <div className="pricipleHeading">
            <h1>OUR PORTFOLIO</h1>
          </div>
          <div className="filterBtnsParent">
            <div className="filterBtns ">
              <button className=" filterbtn allbtn" onClick={() => filterProduct("all")}>All</button>
            </div>
            <div className="filterBtns">
              <button className="filterbtn" onClick={() => filterProduct("ui/ux")}>UI/UX Design</button>
            </div>
            <div className="filterBtns">
              <button className="filterbtn" onClick={() => filterProduct("android")}>Android/iOS</button>
            </div>
            <div className="filterBtns">
              <button className="filterbtn" onClick={() => filterProduct("web")}>Website/WebApp</button>
            </div>
          </div>
          <div className="portfolioCardsParent">
            {filter.map((portfolio, i) => (
              <div className="portfolioCard" key={i}>
                <div className="portfoliocardImg">
                  <img src={portfolio.img} alt="portfolio" />
                </div>
                <div className="portfolioInfo">
                  <p>{portfolio.title}</p>
                  <div className="applicationIcon" dangerouslySetInnerHTML={{ __html: portfolio.icon }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
