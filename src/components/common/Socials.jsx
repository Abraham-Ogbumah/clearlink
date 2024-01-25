import React from "react";

import LinkedIn from "../../assets/icons/linkedin-svgrepo-com.svg";
import Twitter from "../../assets/icons/twitter-154-svgrepo-com.svg";
import Facebook from "../../assets/icons/facebook-svgrepo-com.svg";
import Instagram from "../../assets/icons/instagram-svgrepo-com.svg";
import Github from "../../assets/icons/github-142-svgrepo-com.svg";
import Youtube from "../../assets/icons/youtube-play-svgrepo-com.svg";

const Socials = () => {
  return (
    <div className="social-area">
      <div className="social-links container">
        <div>
          <p className="copyright">© 2023 ClearLink. All rights reserved.</p>
        </div>
        <div className="social-buttons">
          <div className="social-icon">
            <a href="#LinkedIn">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
          <div className="social-icon">
            <a href="#Twitter">
              <img src={Twitter} alt="Twitter" />
            </a>
          </div>
          <div className="social-icon">
            <a href="#Facebook">
              <img src={Facebook} alt="Facebook" />
            </a>
          </div>
          <div className="social-icon">
            <a href="#Instagram">
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
          <div className="social-icon">
            <a href="#Github">
              <img src={Github} alt="Github" />
            </a>
          </div>
          <div className="social-icon">
            <a href="#Youtube">
              <img src={Youtube} alt="Youtuben" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
