import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Credentials from "./Credentials";
import About from "./About";
import { AnimatePresence } from "framer-motion";

function Animation() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/credentials" element={<Credentials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Animation;
