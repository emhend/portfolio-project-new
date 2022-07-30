import React from "react";
import "./App.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/emilyjhend/"
        target="_blank"
        rel="noreferrer"
        className="icon"
        alt="My LinkedIn"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/emhend"
        target="_blank"
        rel="noreferrer"
        className="icon"
        alt="My Github"
      >
        <BsGithub />
      </a>
    </footer>
  );
}
