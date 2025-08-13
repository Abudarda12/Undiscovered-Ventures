import React from "react";
import "../style/portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-content">
        <div className="portfolio-heading">
          <div className="project">
            <div className="left"></div> Projects <div className="right"></div>
          </div>
          <h1>PORTFOLIO</h1>
        </div>
        <div className="portfolio-list">
          <img src="/images/1.jpg" alt="" height={"300px"} width={"300px"} />
          <img src="/images/2.jpg" alt="" height={"300px"} width={"300px"} />
          <img src="/images/3.jpg" alt="" height={"300px"} width={"300px"} />
          <img src="/images/4.jpg" alt="" height={"300px"} width={"300px"} />
          <img src="/images/5.jpg" alt="" height={"300px"} width={"300px"} />
          <img src="/images/6.jpg" alt="" height={"300px"} width={"300px"} />
        </div>
      </div>
    </div>
  );
}
