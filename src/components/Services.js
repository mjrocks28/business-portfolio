import React from "react";
import "../css/Services.css";

function Services() {
  return (
    <div className="services" id="services">
      <div className="services-title-container">
        <h1 className="services-title">Services</h1>
      </div>

      <div className="services-contents">
        <div className="column ">
          <div className="card-pw">
            <div className="card-header">
              <h4>Personal Website</h4>
            </div>
            <p>Hosting and Domain for 1 Year</p>
            <p>Automated Emails</p>
            <p>Static Pages</p>
            <p>Mobile View Friendly</p>
            <p>Login/Registration</p>
          </div>
        </div>

        <div className="column">
          <div className="card-bw">
            <div className="card-header">
              <h4>Business Website</h4>
            </div>
            <p>Hosting and Domain for 1 Year</p>
            <p>Customizable Website</p>
            <p>Cloud Database</p>
            <p>Admin Panel</p>
            <p>Automated Emails</p>
            <p>Dynamic Pages</p>
            <p>Mobile View Friendly</p>
            <p>Login/Registration</p>
          </div>
        </div>

        <div className="column">
          <div className="card-ecs">
            <div className="card-header">
              <h4>E-Commerce (Simple)</h4>
            </div>
            <p>Hosting and Domain for 1 Year</p>
            <p>Cloud Database</p>
            <p>Admin Panel</p>
            <p>Automated Emails</p>
            <p>Payment Options</p>
            <p>Dynamic Pages</p>
            <p>Mobile View Friendly</p>
            <p>Login/Registration</p>
          </div>
        </div>

        <div className="column">
          <div className="card-eca">
            <div className="card-header">
              <h4>E-Commerce (Advanced)</h4>
            </div>
            <p>Hosting and Domain for 1 Year</p>
            <p>Cloud Database</p>
            <p>Admin Panel</p>
            <p>Automated Emails</p>
            <p>Payment Options</p>
            <p>Dynamic Pages</p>
            <p>Mobile View Friendly</p>
            <p>Login/Registration</p>
            <p>Support/Ticketing Panel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
