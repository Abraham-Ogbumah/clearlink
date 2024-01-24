import React from "react";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import ScreenMockup from "../../../assets/images/3_2_screen_mockup.png";

import "./benefit.css";

const Benefit = () => {
  return (
    <div className="benefit">
      <div className="benefit-content">
        <div className="benefit-list">
          <div className="benefits">
            <h3>Ready to clear the path to perfect communication?</h3>
            <ul className="features-list">
              <li className="benefit-item">
                <FontAwesomeIcon icon={faCheck} /> 30 days free trial
              </li>
              <li className="benefit-item">
                <FontAwesomeIcon icon={faCheck} /> Cancel at any time
              </li>
              <li className="benefit-item">
                <FontAwesomeIcon icon={faCheck} /> Access to all features
              </li>
              <li className="benefit-item">
                <FontAwesomeIcon icon={faCheck} /> Personalized onboarding
              </li>
            </ul>
          </div>
          <div className="benefit-buttons">
            <Button text="Talk to sales" className="button sales-button" />
            <Button text="Sign up for free" className="button sign-up-button" />
          </div>
        </div>
        <div className="benefit-image">
          <img src={ScreenMockup} alt="mockup" />
        </div>
      </div>
    </div>
  );
};

export default Benefit;
