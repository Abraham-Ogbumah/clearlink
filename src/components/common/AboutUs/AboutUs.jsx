import React from "react";
import Card from "../Card";
import "./aboutus.css";

import HandDrawnArrow from "../../../assets/images/hand-drawn-arrow.png";
import Collage from "../../../assets/images/group-image.png";
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import Video from "../../../assets/icons/video-svgrepo-com.svg";
import Noise from "../../../assets/icons/sound-svgrepo-com.svg";
import Schedule from "../../../assets/icons/schedule-svgrepo-com.svg";
import Lock from "../../../assets/icons/lock-3-svgrepo-com.svg";

const AboutUs = () => {
  return (
    <div className="aboutus-container container">
      <div className="aboutus-header">
        <div className="clearlink-content">
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

      <div className="aboutus-sub">
        <div className="card-container">
          <Card
            icon={Video}
            header="Crystal-clear HD video"
            description="No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings."
          />
          <Card
            icon={Noise}
            header="Noise-canceling audio"
            description="Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations."
          />
          <Card
            icon={Schedule}
            header="Scheduling made easy"
            description="Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place."
          />
          <Card
            icon={Lock}
            header="Bank-grade security"
            description="Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders."
          />
        </div>
        <div className="aboutus-image">
          <img src={Collage} alt="collage" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
