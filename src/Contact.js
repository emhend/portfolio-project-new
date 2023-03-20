import React, { Component } from "react";
import "./App.css";
import Form from "./Form";

class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact Me</h1>{" "}
        <div className="page-container">
          <Form />
        </div>
      </div>
    );
  }
}

export default Contact;
