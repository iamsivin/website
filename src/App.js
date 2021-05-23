import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Copyright from "./components/Copyright";
import { IoMoonSharp } from "react-icons/io5";

function App() {
  const [dark, setMode] = useState(false);
  return (
    <body className={dark ? "App dark-mode" : "App"}>
      <div className="nav">
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setMode(!dark)}
            className="checkbox"
          />
          <span className="slider round">
            <div className="icon">
              <IoMoonSharp />
            </div>
          </span>
        </label>
      </div>
      <Header />
      <About />
      <Copyright />
    </body>
  );
}

export default App;
