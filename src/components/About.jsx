import React from "react";
import "./About.css";
import Image from "../images/image-b.jpeg";
import Contact from "./Contact.jsx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="about">
          <div className="image-wrap">
            <LazyLoadImage className="image" src={Image} alt="" effect="blur" />
          </div>
          <div className="about-head">
            <div className="heading-wrap">
              <h1 className="heading">Hi there!</h1>
            </div>
            <p className="paragraph-light">
              A front-end developer from India. Curious about the web. Plays
              well with HTML, CSS, JavaScript. And a beginner when it comes to
              frameworks like React and VueJS.
            </p>
          </div>
        </div>
      </div>
      <div className="contact">
        <Contact />
      </div>
    </section>
  );
}

export default About;
