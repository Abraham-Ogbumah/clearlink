import React from "react";
import "./testimonial.css";

import StarRating from "../StarRating/StarRating";

import Shopify from "../../../assets/images/shopify.svg";
import PhotoGrid from "./PhotoGrid";
import CustomerReview from "../CustomerReview";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="container test-container">
        <div className="customer-review">
          <div>
            <img src={Shopify} alt="client name" />
          </div>
          <StarRating rating={5} />
          <h3 className="customer-comment">
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team.
          </h3>
          <CustomerReview />
        </div>
        <div className="photogrid-container">
          <PhotoGrid />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
