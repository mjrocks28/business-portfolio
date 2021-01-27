import React from "react";
import "../css/About.css";
import AboutPic from "../images/about.jpg";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-contents">
        <h1 className="about-title">What we do</h1>
        <div className="about-details">
          <img src={AboutPic} alt="about" className="about-photo" />
          <div className="details">
            At TapUs we pride ourselves in giving professionally competitive IT
            consultation and web solutions to small and medium scale business.
            If you plan to begin your business journey in the IT world but is
            having trouble knowing where to start then we got you covered.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
