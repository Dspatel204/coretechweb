import React, { useContext, useState } from "react";
import "./About.css";
import hexagon from "../../assets/images/Polygon60.png";
import hexagonWhite from "../../assets/images/PolygonWhite.png";
import aboutImg from "../../assets/images/About Us.png";
import innovation from "../../assets/images/innovationIcon.png";
import experties from "../../assets/images/Experties.png";
import clients from "../../assets/images/business_585.png";
import teamMember1 from "../../assets/images/18155.jpg";
import teamMember2 from "../../assets/images/client.jpg";
import teamMember3 from "../../assets/images/1287.jpg";
import teamMember4 from "../../assets/images/6837.jpg";
import teamMember5 from "../../assets/images/27767.jpg";
import teamMember6 from "../../assets/images/21959.jpg";
import teamMember7 from "../../assets/images/45631.jpg";
import teamMember8 from "../../assets/images/executive-business-woman-office.jpg";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { ThemeContext } from "../../context/ThemeContext.jsx";

const About = () => {
  const { darkMode } = useContext(ThemeContext);
  const [hoveredMember, setHoveredMember] = useState(2);

  const members = [
    {
      id: 1,
      name: "John Smith",
      designation: "CEO",
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      img: teamMember1,
    },
    {
      id: 2,
      name: "Alexa ",
      designation: "Founder",
      details:
        "It looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      img: teamMember2,
    },
    {
      id: 3,
      name: "Vipin",
      designation: "Software Engineer",
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout distracted by the readable content of a page when looking at its layout. ",
      img: teamMember3,
    },
    {
      id: 4,
      name: "Ellyse Perry ",
      designation: "UI/UX Designer",
      details:
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      img: teamMember4,
    },
    {
      id: 5,
      name: "Peter",
      designation: "Quality Assurance Analyst",
      details:
        "It is a long established fact that a reader will be distract The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters normal distribution of letters..",
      img: teamMember5,
    },
    {
      id: 6,
      name: "Allena Smith",
      designation: "Web Developer",
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout distracted by the readable content of a page when looking at its layout. ",
      img: teamMember6,
    },
    {
      id: 7,
      name: "Sundar",
      designation: "Systems Analyst",
      details:
        "that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      img: teamMember7,
    },
    {
      id: 8,
      name: "Sundar",
      designation: "Network Engineer",
      details:
        "that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      img: teamMember7,
    },
    // Add other members here...
  ];

  const handleMouseEnter = (id) => {
    setHoveredMember(id);
  };

  const handleMouseLeave = () => {
    setHoveredMember(hoveredMember);
  };
  return (
    <>
      <Navbar />
      <div className="aboutContainer">
        <div className="aboutUsLandingContainer">
          <div className="aboutUsLandingImg">
            <img src={aboutImg} alt="aboutImg" />
          </div>
          <div className="aboutUsLandingText">
            <h1>
              <span className="borderFont">Ab</span>
              <span>out Us</span>
            </h1>
            <p className={darkMode ? "darkColor poppinsLight" : ""}>
              CoreTech is a leading provider of technology solutions for
              businesses. With a focus on delivering the highest quality
              products and services, we help businesses harness the power of
              technology to achieve their goals. Our team of experts is
              dedicated to driving innovation and delivering results that exceed
              our clients' expectations.
            </p>
          </div>
        </div>

        <div className="priciplesContainer">
          <div className="pricipleHeading">
            <h1>OUR PRINCIPLES</h1>
          </div>
          <div className="pricipleHexagonParent">
            <div className="leftHexagon">
              <div className="imgHexagon">
                {darkMode ? (
                  <img src={hexagon} alt="hexagon" />
                ) : (
                  <img src={hexagonWhite} alt="hexagon" />
                )}
              </div>
              <div className="hexagonContent">
                <p className={darkMode ? "dark-mode" : ""}>
                  <img
                    src={innovation}
                    alt="innovation"
                    className="innovationLogo"
                  />
                  <h2 className={darkMode ? "white poppinsLight" : ""}>
                    INNOVATION
                  </h2>
                  <span
                    className={darkMode ? "pricipletextDark poppinsLight" : ""}
                  >
                    We constantly strive to bring innovative IT solutions that
                    revolutionize the way businesses operate.
                  </span>
                </p>
              </div>
            </div>
            <div className="leftHexagon">
              <div className="imgHexagon">
                {darkMode ? (
                  <img src={hexagon} alt="hexagon" />
                ) : (
                  <img src={hexagonWhite} alt="hexagon" />
                )}
              </div>
              <div className="hexagonContent">
                <p className={darkMode ? "dark-mode" : ""}>
                  <img
                    src={experties}
                    alt="innovation"
                    className="expertiseLogo"
                  />
                  <h2 className={darkMode ? "white poppinsLight" : ""}>
                    OUR EXPERTIES
                  </h2>
                  <span
                    className={darkMode ? "pricipletextDark poppinsLight" : ""}
                  >
                    We specialize in web development, software development, and
                    mobile app development. Our team of experts has extensive
                    experience in working with various technologies such as AI,
                    PHP, Python, C#, JavaScript, HTML, CSS and more.
                  </span>
                </p>
              </div>
            </div>
            <div className="leftHexagon">
              <div className="imgHexagon">
                {darkMode ? (
                  <img src={hexagon} alt="hexagon" />
                ) : (
                  <img src={hexagonWhite} alt="hexagon" />
                )}
              </div>
              <div className="hexagonContent">
                <p className={darkMode ? "dark-mode" : ""}>
                  <img src={clients} alt="innovation" className="clientsLogo" />
                  <h2 className={darkMode ? "white poppinsLight" : ""}>
                    OUR CLIENTS
                  </h2>
                  <span
                    className={darkMode ? "pricipletextDark poppinsLight" : ""}
                  >
                    We constantly strive to bring innovative IT solutions that
                    revolutionize the way businesses operate.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ourTeamContainer">
          <div className="ourTeamHeading">
            <h1>MEET THE BEST TEAM EVER</h1>
          </div>
          <div className="teamTopImagesFlex">
            <div className="teamMember firstMember">
              <img src={teamMember1} alt="teamMember"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              className={hoveredMember === 1?"imgTransform":""}
               />
            </div>
            <div className="teamMember secondMember">
              <img src={teamMember2} alt="teamMember"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              className={hoveredMember === 2?"imgTransform":""}
               />
            </div>
            <div className="teamMember thirdMember">
              <img src={teamMember3} alt="teamMember"
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave} 
              className={hoveredMember === 3?"imgTransform":""}
              />
            </div>
          </div>
          <div className="teamMiddleFlex">
            <div className="teamMember eightMember">
              <img src={teamMember8} alt="teamMember"
              onMouseEnter={() => handleMouseEnter(8)}
              onMouseLeave={handleMouseLeave}
              className={hoveredMember === 8?"imgTransform":""}
              />
            </div>
            
            {members.map((member) => (
            <div className={`aboutMember ${darkMode ? "changeShadow" : ""}`} style={{
              display: hoveredMember === member.id ? "block" : "none",
            }}>
              <div className="memberName">
                <h2 className={`mb-0 ${darkMode ? "white poppinsLight" : ""}`}>
                {member.name}
                </h2>
              </div>
              <h6 className={`${darkMode ? "white poppinsLight" : ""}`}>
              {member.designation}
              </h6>
              <p className={`${darkMode ? "teamInfoDarkClr" : ""}`}>
              {member.details}
              </p>
            </div>
            ))}
            <div className="teamMember fourthMember">
              <img src={teamMember4} alt="teamMember"
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
              className={hoveredMember === 4?"imgTransform":""}
              />
            </div>
          </div>
          <div className="teamTopImagesFlex teamBottom">
            <div className="teamMember seventhMember">
              <img src={teamMember7} alt="teamMember"
              onMouseEnter={() => handleMouseEnter(7)}
              onMouseLeave={handleMouseLeave}
              className={hoveredMember === 7?"imgTransform":""}
              />
            </div>
            <div className="teamMember sixthMember">
              <img src={teamMember6} alt="teamMember"
              onMouseEnter={() => handleMouseEnter(6)}
              onMouseLeave={handleMouseLeave}
              className={hoveredMember === 6?"imgTransform":""}
              />
            </div>
            <div className="teamMember fifthMember">
              <img src={teamMember5} alt="teamMember" 
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={handleMouseLeave}
              className={hoveredMember === 5?"imgTransform":""}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
