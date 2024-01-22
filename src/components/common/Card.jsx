import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Card = ([icon, header, description]) => {
  return (
    <div className="card-container">
      <div className="card-icon">
        <FontAwesomeIcon icon={icon} className="fa-robot" />
      </div>
      <div className="card-text">
        <h3>{header}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
