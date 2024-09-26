import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <p className="title1">"Dine Smart: Quick Reservations for Great Eats!"</p>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./hero1.jpg" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title dishes_title">Foods</h1>
              </div>
              <img src="logo.svg" alt="logo"></img>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="hero2.jpg" alt="hero" />
          </div>
          <p className="title1 dishes_title">"Satisfy Your Cravings, One Reservation at a Time!"</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;