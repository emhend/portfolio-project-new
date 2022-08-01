import React, { Component } from "react";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";

class Credentials extends Component {
  render() {
    return (
      <AnimatePresence exitBeforeEnter>
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1>Credentials</h1>
          </motion.div>
          <motion.div
            className="container"
            animate={{ y: [10, 0] }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <p>
              <img
                src={require("./images/basic.png")}
                alt="basic certificate"
                className="img"
              />
              <img
                src={require("./images/plus.png")}
                alt="plus certificate"
                className="img"
              />
              <img
                src={require("./images/responsive.png")}
                alt="responsive certificate"
                className="img"
              />
              <img
                src={require("./images/react.png")}
                alt="react certificate"
                className="img"
              />
              <img
                src={require("./images/SNcert.png")}
                alt="ServiceNow Certification"
                className="img"
              />
            </p>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }
}

export default Credentials;
