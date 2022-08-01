import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import { motion, AnimatePresence } from "framer-motion";

class Contact extends Component {
  render() {
    return (
      <div>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1>Contact Me</h1>
          </motion.div>
          <motion.div
            className="container"
            animate={{ y: [10, 0] }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <Form />
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
}

export default Contact;
