import React, { useState } from "react";
import "../styles/Header.css";

function Header() {
  const [darkMode, setDarkMode] = useState();

  return (
    <div className="Header">
      <div className="header-inner">
        <div className="header-left">
          <h1>Where in the world?</h1>
        </div>

        <div className="header-right">
          {darkMode ? (
            <div className="header-darkMode">
              <p>Dark Mode</p>
            </div>
          ) : (
            <div style={{ cursor: "pointer" }} className="header-lightMode">
              <p>Light Mode</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
