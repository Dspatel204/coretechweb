import React, { useState, useEffect, useContext } from 'react';
import './ScrollUpButton.css'; 
import { FaAngleUp } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext.jsx";

const ScrollUpButton = () => {
  const { darkMode } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-up-button ${isVisible ? 'visible' : ''} ${darkMode?"":"scroll-up-button-dark"}`}
      onClick={scrollToTop}
    >
      <FaAngleUp size={25}/>
    </div>
  );
};

export default ScrollUpButton;
