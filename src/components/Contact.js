import React from "react";
import "../css/Contact.css";
import Image from "../images/contact.png";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-contents">
        <div className="contact-form">
          <h1 className="contact-title">Contact Us</h1>
        </div>
        <img src={Image} alt="contact us" className="contact-image" />
      </div>
    </div>
  );
}

export default Contact;
