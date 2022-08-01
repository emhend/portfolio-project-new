import React, { Component } from "react";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";

class About extends Component {
  render() {
    return (
      <AnimatePresence exitBeforeEnter>
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1>About Me</h1>
          </motion.div>
          <motion.div
            className="container"
            animate={{ y: [10, 0] }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <p>
              <img
                src={require("./images/cactus.png")}
                alt="cactus"
                className="img"
              />
            </p>
            <p>
              I moved to Austin four years ago from my hometown of Baton Rouge,
              Louisiana. Originally, I wanted to make a career sourcing and
              selling vintage clothing. When I decided it was no longer my
              passion to dig through old bins of clothes, I decided to explore
              other options.
            </p>

            <p>
              I found out about SheCodes through a friend and decided to give it
              a try. I previously learned to code when I was younger(when
              MySpace was still around) and picked back up on the skill very
              quickly. After completing two workshops, I knew this was the
              career path I wanted to pursue. I became excited to go home and
              code after work or even to code all day on my off days. I was
              officially hooked. It wasn't long until I made some connections
              and booked my first freelance gig. I'm now a ServiceNow Certified
              System Administrator with a great company.
            </p>

            <p>
              Creating visually appealing websites and apps is how I prefer to
              spend my days but I'm also: An avid film photographer, love to
              travel, usually seen out with my Aussie/Lab mix, and hope to
              inspire other women to switch to STEM.
            </p>
            <p>
              <img
                src={require("./images/lieux.png")}
                alt="lieux"
                className="img"
              />
              <img
                src={require("./images/travel.png")}
                alt="travel"
                className="img"
              />
            </p>
          </motion.div>
        </div>
      </AnimatePresence>
    );
  }
}

export default About;
