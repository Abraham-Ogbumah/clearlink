import React from "react";
import ProfilePic from "../../assets/images/Abraham-Ogbumah-Professional Image-1_034910.png"

const CustomerReview = () => {
  return (
    <div className="customer-details">
      <div className="customer-details-info">
        <div className="customer-image sm-rounded-div">
          <img src={ProfilePic} alt="profile" />
        </div>
        <div className="customer-designation">
            <p>Abraham Ogbumah</p>
            <p>Project Manager, Shopify</p>
        </div>
      </div>
      <div className="review-buttons">
        <div className="review-button sm-rounded-div"></div>
        <div className="review-button sm-rounded-div"></div>
      </div>
    </div>
  );
};

export default CustomerReview;
