import React from "react";

function Nav() {
  return (
    <ul className="link-list">
      <li>
        <a
          href="/"
          className="nav-link"
          activeClassName="active"
          rel="noreferrer"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="/about"
          className="nav-link"
          activeClassName="active"
          rel="noreferrer"
        >
          About
        </a>
      </li>
      <li>
        <a href="/portfolio" className="nav-link" rel="noreferrer">
          Portfolio
        </a>
      </li>
      <li>
        <a href="/contact" className="nav-link" rel="noreferrer">
          Contact
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/emilyjhend/"
          target="_blank"
          className="nav-link"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </li>
      <li>
        <a
          href="https://github.com/emhend"
          target="_blank"
          className="nav-link"
          rel="noreferrer"
        >
          GitHub
        </a>
      </li>
    </ul>
  );
}

export default Nav;
