import React from "react";
import Shopify from "../assets/images/shopify.svg";
import Coinbase from "../assets/images/coinbase.svg";
import Dropbox from "../assets/images/dropbox.svg";
import Intercom from "../assets/images/intercom.svg";
import Marvel from "../assets/images/marvel.svg";
import Automatic from "../assets/images/automattic.svg";
import AboutUs from "./common/AboutUs/AboutUs";

const Main = () => {
  return (
    <main className="container">
      <div className="partners-info">
        <p className="partner-caption">
          Join 1,500+ companies already video conferencing the ClearLink way
        </p>
        <div className="partners">
          <img src={Shopify} alt="shopify" />
          <img src={Coinbase} alt="shopify" />
          <img src={Dropbox} alt="shopify" />
          <img src={Intercom} alt="shopify" />
          <img src={Marvel} alt="shopify" />
          <img src={Automatic} alt="shopify" />
        </div>
      </div>
      <AboutUs />
    </main>
  );
};

export default Main;
