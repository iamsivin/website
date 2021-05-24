import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Copyright from "./components/Copyright";
import { IoMoonSharp, IoSunny } from "react-icons/io5";

function App() {
  const [dark, setMode] = useState(false);
  return (
    <div className={dark ? "App dark-mode" : "App"}>
      <div className="empty"></div>
      <div className="nav">
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setMode(!dark)}
            className="checkbox"
          />
          <span className="slider round">
            <div className="icon-sun">
              <IoSunny />
            </div>
            <div className="icon-moon">
              <IoMoonSharp />
            </div>
          </span>
        </label>
      </div>
      <Header />
      <About />
      <Copyright />
    </div>
  );
}

export default App;
