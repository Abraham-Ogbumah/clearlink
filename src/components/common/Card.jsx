import React from "react";


const Card = ({icon, header, description, name}) => {
  return (
    <div className="card">
      <div className="card-icon">
        <img src={icon} alt={name}/>
      </div>
      <div className="card-text">
        <h3>{header}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
