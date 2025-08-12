import React from 'react';
import "../style/client.css";

export default function Client() {
  return (
    <div className="client">
      <div className="client-heading">
        <h1>Selected Clients</h1>
        <div className="client-subheading">
            <p>Helping <i>brands</i><br />to standout</p>
        </div>
      </div>
      <div className="client-list">
        <div className="client-item">
            <img src="/images/1.jpg" alt="" height={"80px"} width={"100px"}/>
        </div>
        <div className="client-item">
            <img src="/images/1.jpg" alt="" height={"80px"} width={"100px"}/>
        </div>
        <div className="client-item">
            <img src="/images/1.jpg" alt="" height={"80px"} width={"100px"}/>
        </div>
        <div className="client-item">
            <img src="/images/1.jpg" alt="" height={"80px"} width={"100px"}/>
        </div>
        <div className="client-item">
            <img src="/images/1.jpg" alt="" height={"80px"} width={"100px"}/>
        </div>
        <div className="client-item">
            <img src="/images/1.jpg" alt="" height={"80px"} width={"100px"}/>
        </div>
        <div className="client-item">
            <img src="/images/1.jpg" alt="" height={"80px"} width={"100px"}/>
        </div>
        <div className="client-item">
            <img src="/images/1.jpg" alt="" height={"80px"} width={"100px"}/>
        </div>
        <div className="client-item">
            <img src="/images/1.jpg" alt="" height={"80px"} width={"100px"}/>
        </div>
        <div className="client-item">
            <img src="/images/1.jpg" alt="" height={"80px"} width={"100px"}/>
        </div>
      </div>
      <button>
        <a href="#">Get in Touch</a>
      </button>
    </div>
  );
}