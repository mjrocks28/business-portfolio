import React from "react";
import "../css/Home.css";
import Branding from "../images/branding-transparent.png";

function Home() {
  const scrollTo = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      <div className="home-contents">
        <div className="home-title">
          <h1 className="title">
            <img src={Branding} alt="tapusbranding" className="branding-img" />
          </h1>
        </div>
        <button onClick={scrollTo}>Contact Us</button>
      </div>
    </div>
  );
}

export default Home;
