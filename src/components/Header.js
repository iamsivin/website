import React from "react";
import "./Header.css";

function Header() {
  return (
    <section className="header-wrap">
      <div className="header">
        <div className="wrap">
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
