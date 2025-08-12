import React, { useState } from "react";
import "../style/navbar.css";

export default function Navbar() {
  const [active, setActive] = useState(true);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <nav>
      <div className="logo">
        <img src="./images/logo.png" alt="Logo" height={"40px"} width={"40px"} />
        <p>Undiscoverd Ventures</p>
      </div>
      <div className="menu">
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Services</a>
      </div>
      <div className="nav-contact">
        <a href="#">
          Contact<i class="fa-solid fa-circle-user"></i>{" "}
        </a>
      </div>
      <div className="hamburger" onClick={toggleActive}>
        <i class="fa-solid fa-circle-user"></i>
      </div>

      <div className={`mobile-menu ${!active ? "active" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Services</a>
        <a href="#">
          Contact<i class="fa-solid fa-circle-user"></i>{" "}
        </a>
      </div>
    </nav>
  );
}
