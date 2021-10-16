import React from "react";
import "./Header.css";

function Header() {
  return (
    <section className="header-wrap">
      <div className="header">
        <div className="wrap">
          <div className="name">SIVIN VARGHESE</div>
        </div>
        <div className="navigation">
          <a className="github-view" href="https://github.com/iamsivin">
            GITHUB
          </a>
          <a className="work-view" href="https://giters.com/iamsivin">
            WORKS
          </a>
          <div className="dark"></div>
        </div>
      </div>
    </section>
  );
}

export default Header;
