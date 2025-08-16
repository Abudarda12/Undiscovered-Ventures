import React from "react";
import "../style/hero.css";

export default function Hero() {
  return (
    <main>
      <div className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/images/showreels ud.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> 
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
    </main>

  );
}
