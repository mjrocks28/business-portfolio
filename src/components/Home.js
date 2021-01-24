import React from "react";
import "../css/Home.css";
import Branding from "../images/branding-transparent.png";

function Home() {
  return (
    <div className="home">
      <div className="home-contents">
        <div className="home-title">
          <h1 className="title">
            <img src={Branding} alt="tapusbranding" className="branding-img" />
          </h1>
        </div>
        <button>Contact Us</button>
      </div>
    </div>
  );
}

export default Home;
