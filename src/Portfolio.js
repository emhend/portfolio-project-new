import React, { Component } from "react";
import "./App.css";
import { motion, Transition } from "framer-motion";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>Portfolio</h1>
        </motion.div>
        <motion.div
          className="container"
          animate={{ y: [10, 0] }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <p>
            <img
              src={require("./images/wine.png")}
              class="img"
              alt="USnaturalwine.com"
              style={{ width: 400 }}
            />
            <h4>USNaturalWine.com</h4>
            <p className="p-project">Built with Shopify + Liquid</p>
          </p>
          <img
            src={require("./images/reactweather.png")}
            class="img"
            alt="react weather project"
            style={{ width: 400 }}
          />
          <p>
            <h4>React Weather App</h4>
            <p className="p-project">Built with React</p>
            <a
              href="https://github.com/emhend/weather-react"
              class="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Code→
            </a>
            <br />
            <a
              href="https://serene-torvalds-ea5d3b.netlify.app/"
              class="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Live→
            </a>
          </p>
          <p>
            <img
              src={require("./images/weatherapp.png")}
              class="img"
              alt="JavaScript Weather App"
              style={{ width: 400 }}
            />
            <h4>Weather App</h4>
            <p class="p-project">Built with HTML, CSS, and JavaScript</p>
            <a
              href="https://github.com/emhend/weather-app2"
              class="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Code→
            </a>
            <br />
            <a
              href="https://stupefied-heyrovsky-cff22f.netlify.app/"
              class="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Live→
            </a>
          </p>
          <p>
            <img
              src={require("./images/dictionary.png")}
              class="img"
              alt="React Dictionary"
              style={{ width: 400 }}
            />
            <h4>React Dictionary</h4>
            <p class="p-project">Built with React</p>
            <a
              href="https://github.com/emhend/dictionary-project"
              class="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Code→
            </a>
            <br />
            <a
              href="https://elegant-hopper-5b7dbe.netlify.app/"
              class="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Live→
            </a>
          </p>
        </motion.div>
      </div>
    );
  }
}

export default Portfolio;
