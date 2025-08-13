import React from "react";
import "../style/hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="upper-hero">
        <div className="upper-content">
          <h1>Undiscovered</h1>
          <h4>Ventures</h4>
        </div>
      </div>
      <div className="lower-hero">
        <p>
          <span id="bold">No generic websites. No empty marketing promises.</span> Just tools<br /> 
          and strategies that help your business grow and your brand shine.
        </p>
      </div>
    </div>
  );
}
