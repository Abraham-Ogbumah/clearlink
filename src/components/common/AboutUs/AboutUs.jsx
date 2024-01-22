import React from "react";
import Card from "../Card";
import "./aboutus.css";

import HandDrawnArrow from "../../../assets/images/hand-drawn-arrow.png";
import Collage from "../../../assets/images/group-image.png"

const AboutUs = () => {
  return (
    <div>
      <div className="aboutus-header">
        <div>
          <p className="clearlink">The ClearLink Advantage</p>
          <h2 className="clearlink-header">Why choose ClearLink</h2>
          <p className="clearlink-description hero-description">
            In a world where connection is everything, ClearLink takes the lead.
            Our <br></br>cutting-edge video conferencing app offers:
          </p>
        </div>
        <div className="scribble">
          <img src={HandDrawnArrow} alt="scribble" />
        </div>
      </div>

      <div>
        <div>
          <Card />
        </div>
        <div>
            <img src={Collage} alt="collage" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
