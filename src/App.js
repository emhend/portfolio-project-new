import React, { Component } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./fonts.css";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import InfiniteScroll from "react-infinite-scroll-component";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="page-container">
          <h1>Emily Henderson</h1>
          <h2>Front End Developer in Austin, TX</h2>
          <img
            src={require("./images/plant.png")}
            alt="cactus"
            className="home-img"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
