import React from 'react';
import '../style/hero.css';

export default function Hero(){
    return(
        <div className="hero">
            <div className="upper-hero">
                <h1>Undiscovered</h1>
                <h4>Ventures</h4>
                
            </div>
            <div className="lower-hero">
                <p>No generic websites. No empty marketing promises. <br /> Just tools and strategies that help your business grow and your brand shine.</p>
            </div>
        </div>
    )
}