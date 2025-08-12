import React, { useRef } from "react";
import useInView from "./useInView";
import "../style/footer.css";

export default function Footer() {
  const footerRef = useRef(null);
  useInView(footerRef);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-bg">
        <div className="footer-content">
          <h2 className="animate">LET’S WORK <span>TOGETHER</span></h2>

          <div className="footer-columns">
            <div className="col animate">
              <h4>Speak to us</h4>
              <p>ashish@undiscovered.co.in</p>
              <p>abhishek@undiscovered.co.in</p>
              <p>avinash@undiscovered.co.in</p>
              <p>9110954876, 7827151970</p>
            </div>

            <div className="col animate">
              <h4>Follow us</h4>
              <p>📷 Instagram</p>
              <p>▶ YouTube</p>
              <p>📘 Facebook</p>
            </div>

            <div className="col animate">
              <h4>Visit us</h4>
              <p>RK Puram, Saguna More, Patna</p>
            </div>
          </div>

          <div className="footer-brand animate">
            <span>UNDISCOVERED</span> VENTURES
          </div>
        </div>
      </div>
    </footer>
  );
}