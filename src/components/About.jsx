import React from "react";
import "./About.css";
import Image from "../images/image.jpeg";
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
              I'm a front-end developer from India focusing on building things
              for the web. Currently, I'm working as a Product Developer at <span />
              <a className="work-link" href="https://www.chatwoot.com/">
                Chatwoot
              </a>
              . Plays well with HTML, CSS, JavaScript and for frameworks Vue and
              React.
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
