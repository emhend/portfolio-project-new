import React, { Component } from "react";
import "./App.css";

class About extends Component {
  render() {
    return (
      <div>
        <div className="page-container">
          <h1>About Me</h1>
          <p>
            <img
              src={require("./images/ovalheadshot.png")}
              alt="headshot"
              className="img"
            />
          </p>
          <p class="">
            I moved to Austin five years ago from my hometown of Baton Rouge,
            Louisiana after graduating with my Bachelor of Science. Originally,
            I wanted to make a career sourcing and selling vintage clothing.
            When I decided it was no longer my passion to dig through old bins
            of clothes, I decided to explore other options.
          </p>

          <p class="">
            A friend of mine mentioned she was doing a coding bootcamp and I
            decided to give it a try. I previously learned to code when I was
            younger(when MySpace was still around) and picked back up on the
            skill very quickly. After completing two workshops, I knew this was
            the career path I wanted to pursue. I became excited to go home to
            code after work or even to code all day on my off days. I was
            officially hooked. It wasn't long until I made some connections and
            booked my first freelance gig. I'm now a ServiceNow Certified System
            Administrator with a great company.
          </p>

          <p class="">
            Creating visually appealing websites and apps is how I prefer to
            spend my days but I'm also: An avid film photographer, love to
            travel, usually seen out with my Aussie/Lab mix, and hope to inspire
            other women to switch to STEM.
          </p>
          <p>
            <img src={require("./images/lieux.png")} alt="lieux" className="" />
            <img
              src={require("./images/travel.png")}
              alt="travel"
              className=""
            />
          </p>
        </div>
      </div>
    );
  }
}

export default About;
