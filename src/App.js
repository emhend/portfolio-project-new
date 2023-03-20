import React, { Component } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "./fonts.css";

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
