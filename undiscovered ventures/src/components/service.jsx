import React from "react";
import "../style/service.css";

export default function Service() {
  return (
    <div className="service">
      <div className="service-header">
        <div className="s-header">
          <h1>Services.</h1>
        </div>
        <div className="s-subheader">
          <h5>
            We’ve helped businesses across <br />
            industries achieve their goals.
          </h5>
        </div>
      </div>

     

      <div className="service-list">
        <div class="container">
          <div class="title-box">Core Services</div>
          <div class="content-box">
            <ul>
              <li>Documentary Filmmaking</li>
              <li>Visual Stroytelling</li>
              <li>Corporate Visual Production</li>
              <li>Commmmercial Production</li>
              <li>Event Shoots/Films</li>
            </ul>
          </div>
        </div>
        <div class="container">
          <div class="title-box">Specialized Services</div>
          <div class="content-box">
            <ul>
              <li>Brand Films</li>
              <li>Soical Media Content</li>
              <li>Event Cinematography</li>
              <li>Product videos</li>
              <li>Testimonial videos</li>
              <li>AR - VR Projects</li>
              <li>Website Development</li>
            </ul>
          </div>
        </div>
        <div class="container">
          <div class="title-box">Additional Services</div>
          <div class="content-box">
            <ul>
              <li>Drone Cinematography
                <p>Capturing stunning aerial <br /> footage for various projects.</p>
              </li>
              <li>Post Production:
                <p>Providing Comprehensive  <br />Post-Production  Services, <br /> Including editing,  color <br />grading visual effects & <br />Sound Design.</p>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
