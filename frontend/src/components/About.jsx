import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to FeastFinder, where we simplify your dining experience! Our mission is to connect food lovers with their favorite restaurants effortlessly. Built with the MERN stack, our application provides a seamless platform for making reservations, ensuring you never miss out on a delightful meal again. Whether you're planning a cozy dinner for two or a large gathering with friends and family, [Your App Name] is designed to cater to all your reservation needs. We believe in making dining out not just a meal but a memorable experience. Join us in exploring a world of culinary delights and savor every moment at your favorite eateries!
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;