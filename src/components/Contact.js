import React from "react";
import "../css/Contact.css";
import Image from "../images/contact.png";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const notify = () => toast.success("Message is sent!");
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s3fx7bt",
        "template_ri77tok",
        e.target,
        "user_eTBO2AXm81wIWqiLHIXNd"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    notify();
  }

  return (
    <div className="contact" id="contact">
      <div className="contact-contents">
        <div className="contact-form">
          <h1 className="contact-title">Contact Us</h1>

          <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="to_name" value="TapUs team" />
            <label>Your Name</label>
            <input type="text" name="user_name" required />
            <label>Your Email Address</label>
            <input type="email" name="user_email" required />
            <label>Message</label>
            <textarea name="message" required />
            <input type="submit" value="Send" />
          </form>
        </div>
        <img src={Image} alt="contact us" className="contact-image" />
      </div>
      <Toaster />
    </div>
  );
}

export default Contact;
