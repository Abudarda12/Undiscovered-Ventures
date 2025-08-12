import React from 'react';


export default function Navbar() {
    return(
        <nav>
            <div className="logo">
                <img src="./images/logo.png" alt="Logo" height={"40px"} />
                <h1>Undiscovered Ventures</h1>
            </div>
            <div className="menu">
                <a href="#">Home</a>
                <a href="#">Projects</a>
                <a href="#">Services</a>
            </div>
            <div className="nav-contact">
                <a href="#">Contact<i class="fa-solid fa-circle-user"></i> </a>
            </div>
        </nav>
    )
}