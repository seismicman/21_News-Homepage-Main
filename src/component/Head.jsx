import React, { useState } from "react";
import logo from "../assets/images/logo.svg";

const Head = () => {
  const [isactive, setIsactive] = useState(false);
  const Open = (isactive) => {
    if (isactive === true) {
      return setIsactive(false);
    } else {
      return setIsactive(true);
    }
  };
  return (
    <article className="menu">
      <div className="logo">
        <img src={logo} alt="logo.svg" />
      </div>
      <button
        className={`hamburger hamburger--vortex ${isactive ? "is-active" : ""}`}
        type="button"
        onClick={() => Open(isactive)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <nav className={`menu-bar ${isactive ? "is-active" : ""}`}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">New</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
        </ul>
      </nav>
    </article>
  );
};

export default Head;
