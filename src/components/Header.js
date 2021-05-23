import React from "react";
import "./Header.css";
import Logo from "../images/logo.png";

function Header() {
  return (
    <section className="header-logo-wrap">
      <div className="header-wrap">
        <div className="wrap">
          <img className="logo" src={Logo} alt=""></img>
          <div className="name">Sivin Varghese</div>
        </div>
        <div className="navigation">
          <div className="about-view">About</div>
          <div className="work-view">Works</div>
          <div className="dark"></div>
        </div>
      </div>
    </section>
  );
}

export default Header;
