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
            Our goal is to help business adapt to the new normal. We design and
            build websites for businesses
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
