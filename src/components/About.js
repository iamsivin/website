import React from "react";
import "./About.css";
import Image from "../logo/image.jpeg";
import Contact from "./Contact";

function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="about">
          <div className="image-wrap">
            <img className="image" src={Image} alt=""></img>
          </div>
          <div class="about-head">
            <div class="heading-wrap">
              <h1 class="heading-jumbo">Hi there!</h1>
            </div>
            <p class="paragraph-light bigger">
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
