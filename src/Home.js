import React, { Component } from "react";
import "./App.css";
import "./fonts.css";
import { motion } from "framer-motion";

class Home extends Component {
  render() {
    return (
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>Hello,</h1>
        </motion.div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2>I'm Emily</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h3>Front End Developer in Austin, TX</h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ y: [10, 0], opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <img
              src={require("./images/ovalheadshot.png")}
              alt="headshot"
              className="img"
            />
          </motion.div>
        </div>
      </div>
    );
  }
}

export default Home;
