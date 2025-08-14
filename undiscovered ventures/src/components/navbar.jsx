import React, { useState } from "react";
import "../style/navbar.css";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <>
    <nav>
      <div className="logo">
        <img src="./images/logo.png" alt="Logo" height={"40px"} width={"40px"} />
        <p>Undiscoverd Ventures</p>
      </div>
      <div className="menu">
        <a href="#">Home</a>
        <a href="#project">Projects</a>
        <a href="#service">Services</a>
      </div>
      <div className="nav-contact">
        <a href="#contact">
          Contact<i class="fa-solid fa-circle-user"></i>{" "}
        </a>
      </div>
      <div className="hamburger" onClick={toggleActive}>
        <i class={`fa-solid fa-${!active?"bars":"x"}`}></i>
      </div>
    </nav>
    <div className={"mobile-menu"} id={`${active?"show":''}`}>
        <a href="#">Home</a>
        <a href="#project">Projects</a>
        <a href="#service">Services</a>
        <a href="#contact">
          Contact<i class="fa-solid fa-circle-user"></i>{" "}
        </a>
      </div>
    </>
  );
}
