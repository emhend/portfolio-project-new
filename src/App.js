import React, { Component } from "react";
import { NavLink, HashRouter } from "react-router-dom";
import Animation from "./Animation";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="page-container">
          <div>
            <hr />
            <Animation />
          </div>
          <ul className="link-list">
            <li>
              <NavLink to="/" className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active"
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className="nav-link">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/credentials" className="nav-link">
                Credentials
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>
        <Footer />
      </HashRouter>
    );
  }
}

export default App;
