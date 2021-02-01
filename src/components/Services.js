import React from "react";
import "../css/Services.css";

function Services() {
  return (
    <div className="services" id="services">
      <div className="services-title-container">
          <h1 className="services-title">Services</h1>
      </div>
    
      <div className="services-contents">
      <div class="row">
          <div class="column ">
            <div class="card-pw">
            <div class="card-header">            
               <h4>Personal Website</h4>
            </div>          
            <p>Hosting and Domain for 1 Year</p>
            <p>Automated Emails</p>
            </div>
          </div>

          <div class="column">
          <div class="card-bw">
              <div class="card-header">            
               <h4>Business Website</h4>
              </div>   
              <p>Hosting and Domain for 1 Year</p>
              <p>Customizable Website</p>
              <p>Admin Panel</p>
              <p>Automated Emails</p>
            </div>
          </div>
          
          <div class="column">
          <div class="card-ecs">
              <div class="card-header">            
                <h4>E-Commerce (Simple)</h4>          
              </div>            
              <p>Hosting and Domain for 1 Year</p>
              <p>Cloud Database</p>
              <p>Admin Panel</p>
              <p>Automated Emails</p>
              <p>Payment Options</p>
            </div>
          </div>

          <div class="column">
          <div class="card-eca">
              <div class="card-header">            
                <h4>E-Commerce (Advanced)</h4>
              </div> 
              <p>All inclusions of Simple Version</p>
              <p>Support/Ticketing Panel</p>
            </div>
          </div>
        </div>
      </div>

   </div>
  

    
  );
}

export default Services;
