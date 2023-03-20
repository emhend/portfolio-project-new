import React, { Component } from "react";
import "./App.css";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="page-container">
          <h1>Portfolio</h1>
          <p>
            <img
              src={require("./images/wine.png")}
              className="img"
              alt="USnaturalwine.com"
              style={{ width: 400 }}
            />
          </p>
          <p>
            <h4>USNaturalWine.com</h4>
          </p>
          <p className="p-project">Built with Shopify + Liquid</p>
          <p class="project-link"></p>
          <p>
            <img
              src={require("./images/reactweather.png")}
              className="img"
              alt="react weather project"
              style={{ width: 400 }}
            />
          </p>
          <p>
            <h4>React Weather App</h4>
          </p>
          <p className="p-project">Built with React</p>
          <p>
            <a
              href="https://github.com/emhend/weather-react"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Code→
            </a>
          </p>

          <p>
            <a
              href="https://serene-torvalds-ea5d3b.netlify.app/"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Live→
            </a>
          </p>
          <p>
            <img
              src={require("./images/weatherapp.png")}
              className="img"
              alt="JavaScript Weather App"
              style={{ width: 400 }}
            />
          </p>
          <p>
            <h4>Weather App</h4>
          </p>
          <p class="p-project">Built with HTML, CSS, and JavaScript</p>
          <p>
            <a
              href="https://github.com/emhend/weather-app2"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Code→
            </a>
          </p>
          <p>
            <a
              href="https://stupefied-heyrovsky-cff22f.netlify.app/"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Live→
            </a>
          </p>
          <p>
            <img
              src={require("./images/dictionary.png")}
              className="img"
              alt="React Dictionary"
              style={{ width: 400 }}
            />
          </p>
          <p>
            <h4>React Dictionary</h4>
          </p>
          <p class="p-project">Built with React</p>
          <p>
            <a
              href="https://github.com/emhend/dictionary-project"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Code→
            </a>
          </p>
          <p>
            <a
              href="https://elegant-hopper-5b7dbe.netlify.app/"
              className="project-link"
              target="_blank"
              rel="noreferrer"
            >
              View Live→
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Portfolio;
