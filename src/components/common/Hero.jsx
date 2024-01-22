import React from "react";
import HeroImage from "../../assets/images/Hero-image.png";
import UserReviews from "../../assets/images/user_reviews.png";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import './hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="left-content">
          <h1>
            Uniting the world,<br></br>one video call at a time
          </h1>
          <p>
            Experience the future of communication with ClearLink – where
            crystal-clear video conferencing meets <br></br>unparalleled simplicity.
          </p>

          <div className="action-button">
            <Button
              text="Start your free trial"
              className="button free-trial-button"
            />
            <div className="ai-assistant">
              <FontAwesomeIcon icon={faRobot} className="fa-robot"/>
              <span>Discover AI assistant</span>
            </div>
          </div>
          <div className="user-reviews">
            <img src={UserReviews} alt="UserReview" />
          </div>
        </div>
        <div className="right-content">
          <img src={HeroImage} alt="sampleimage" className="hero-image"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
