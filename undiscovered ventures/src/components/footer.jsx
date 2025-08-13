import React, { useRef } from "react";
import useInView from "./useInView";
import "../style/footer.css";

export default function Footer() {
  const footerRef = useRef(null);
  useInView(footerRef);

  return (
    <div class="footer">
    <div class="footer-content">
        <h1>LET’S WORK <span>TOGETHER</span></h1>
        <div class="footer-grid">
            <div>
                <h3>Speak to us</h3>
                <p>ashish@undiscovered.co.in</p>
                <p>abhishek@undiscovered.co.in</p>
                <p>avinash@undiscovered.co.in</p>
                <p>9110954876, 7827151970</p>
            </div>
            <div>
                <h3>Follow us</h3>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                </div>
            </div>
            <div>
                <h3>Visit us</h3>
                <p>RK Puram, Saguna More, Patna</p>
            </div>
        </div>
        <div class="brand-name">
            <span>UNDISCOVERED</span> <br /> VENTURES
        </div>
    </div>
</div>

  );
}