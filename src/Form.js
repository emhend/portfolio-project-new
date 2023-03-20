import React, { useState } from "react";
import "./App.css";
import { send } from "emailjs-com";
import { motion } from "framer-motion";

function Form() {
  const [toSend, setToSend] = useState({
    from_name: "",
    company: "",
    email: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_bm8lt9n", "template_sw6tt9o", toSend, "91fCQdKgi4TbjpcEE")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Got it, Thanks!");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert("Oops...Try again!");
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    e.target.reset();
  };
  return (
    <div>
      <div className="page-container">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            id="name"
            name="from_name"
            className="contact-form"
            value={toSend.from_name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <br />
          <input
            type="text"
            id="company"
            name="company"
            className="contact-form"
            value={toSend.from_company}
            onChange={handleChange}
            placeholder="Company"
          />
          <br />
          <input
            type="text"
            id="email"
            name="email"
            className="contact-form"
            value={toSend.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <br />
          <textarea
            rows="5"
            cols="50"
            name="message"
            className="contact-form"
            value={toSend.message}
            onChange={handleChange}
            placeholder="Leave me a note..."
            required
          />
          <br />
          <motion.input
            type="Submit"
            id="submit"
            value="submit"
            className="button"
          />
        </form>
      </div>
    </div>
  );
}

export default Form;
