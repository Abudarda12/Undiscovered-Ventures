import React from "react";
import "../style/portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-heading">
        <div className="project">
            <div className="left"></div> Projects <div className="right"></div>
        </div>
        <h1>PORTFOLIO</h1>
      </div>
      <div className="portfolio-list">
        <img src="/images/5d087b9f19889c2ec7f832d64dab895a2155b5bd.jpg" alt="" height={"300px"} width={"300px"}/>
         <img src="/images/5d087b9f19889c2ec7f832d64dab895a2155b5bd.jpg" alt="" height={"300px"} width={"300px"}/>
          <img src="/images/5d087b9f19889c2ec7f832d64dab895a2155b5bd.jpg" alt="" height={"300px"} width={"300px"}/>
           <img src="/images/5d087b9f19889c2ec7f832d64dab895a2155b5bd.jpg" alt="" height={"300px"} width={"300px"}/>
            <img src="/images/5d087b9f19889c2ec7f832d64dab895a2155b5bd.jpg" alt="" height={"300px"} width={"300px"}/>
             <img src="/images/5d087b9f19889c2ec7f832d64dab895a2155b5bd.jpg" alt="" height={"300px"} width={"300px"}/>
      </div>
    </div>
  );
}