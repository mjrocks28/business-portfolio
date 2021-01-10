import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../css/Navbar.css";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <div className="navbar">
        <a href="/#" onClick={scrollToTop} className="logo">
          Begin PH
        </a>

        <a href="/#" className="toggle-button" onClick={handleClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>

        <ul className="nav-items">
          <li>
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <div className={click ? "mobile-navbar mobile-active" : "mobile-navbar"}>
        <ul className="mobile-nav-items">
          <li>
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
