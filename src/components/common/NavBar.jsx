import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import Logo from "../../assets/images/logo.png";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <img src={Logo} alt="Clearfix logo" />
      </div>
      <nav className="top-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#products" className="nav-link">
              Products <FontAwesomeIcon icon={faAngleDown} />
            </a>
          </li>
          <li className="nav-item">
            <a href="#solutions" className="nav-link">
              Solutions <FontAwesomeIcon icon={faAngleDown} />
            </a>
          </li>
          <li className="nav-item">
            <a href="#resources" className="nav-link">
              Resources <FontAwesomeIcon icon={faAngleDown} />
            </a>
          </li>
          <li className="nav-item">
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
          </li>
        </ul>
      </nav>
      <div className="button-">
        <Button text="Talk to sales" className="primary-button" />
        <Button text="Sign up for free" />
      </div>
    </div>
  );
};

export default NavBar;
