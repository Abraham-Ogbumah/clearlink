import React from "react";
import "./aboutus.css";

import HandDrawnArrow from "../../../assets/images/hand-drawn-arrow.png"

const AboutUs = () => {
  return (
    <div>
      <div>
        <p>The ClearLink Advantage</p>
        <h2>Why choose ClearLink</h2>
        <p>
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
      </div>
      <div>
        <img src={HandDrawnArrow} alt="scribble" />
      </div>
    </div>
  );
};

export default AboutUs;
