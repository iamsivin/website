import React from "react";
import "./Contact.css";
import {
  IoLogoGithub,
  IoMail,
  IoLogoTwitter,
  IoLogoDribbble,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoFacebook,
} from "react-icons/io5";

function Contact() {
  return (
    <section>
      <div className="icon-wrap">
        <a className="link github" href="https://github.com/iamsivin">
          <IoLogoGithub />
        </a>
        <a className="link" href="mailto:webofworld1@gmail.com">
          <IoMail />
        </a>
        <a className="link" href="https://twitter.com/sivin_varghese">
          <IoLogoTwitter />
        </a>
        <a className="link" href="https://dribbble.com/sivin-git">
          <IoLogoDribbble />
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/sivin-varghese-021a471a4/"
        >
          <IoLogoLinkedin />
        </a>
        <a className="link" href="https://www.instagram.com/siv.__in/">
          <IoLogoInstagram />
        </a>
        <a className="link" href="https://www.facebook.com/sivin.thoppil/">
          <IoLogoFacebook />
        </a>
      </div>
    </section>
  );
}

export default Contact;
