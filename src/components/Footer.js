import React from "react";
import { Link } from "react-scroll";
import { SocialIcon } from "react-social-icons";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h1>Begin PH</h1>
          <span>Web Solutions</span>
        </div>

        <div className="footer-company">
          <p>Company</p>

          <ul>
            <li>
              <Link to="about" smooth={true} offset={-70} duration={500}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} offset={-70} duration={500}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="socials">
          <p className="socials-title">Socials</p>

          <div className="socials-container">
            <div>
              <SocialIcon
                url="https://facebook.com"
                style={{ height: 25, width: 25 }}
                label="Facebook Page"
              />
            </div>

            <div>
              <SocialIcon
                url="https://instagram.com"
                style={{ height: 25, width: 25 }}
              />
            </div>

            <div>
              <SocialIcon
                url="mailto:mj28_mendoza@icloud.com"
                style={{ height: 25, width: 25 }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; Begin PH | Web Solutions 2021.</span>
        <span>Privacy Statement</span>
        <span>Terms of Use</span>
      </div>
    </div>
  );
};

export default Footer;
