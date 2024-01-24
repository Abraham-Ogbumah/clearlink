import React from "react";
import Logo from "../../assets/images/logo.png";
import Links from "./Links";

import GoogleButton from "../../assets/images/playstore_badge.png";
import AppleBotton from "../../assets/images/apple_app_store_badge.png";

const FooterLinks = () => {
  const footerLinks = [
    { href: "#overview", text: "Overview" },
    { href: "#features", text: "Features" },
    { href: "#solutions", text: "Solutions" },
    { href: "#tutorials", text: "Tutorials" },
    { href: "#pricing", text: "Pricing" },
  ];
  const footerLinks2 = [
    { href: "#aboutus", text: "About Us" },
    { href: "#career", text: "Career" },
    { href: "#press", text: "Press" },
    { href: "#news", text: "News" },
    { href: "#contact", text: "Contact" },
  ];
  const footerLinks3 = [
    { href: "#blog", text: "Blog" },
    { href: "#events", text: "Events" },
    { href: "#helpcenter", text: "Help Centre" },
    { href: "#Tutorials", text: "Tutorials" },
    { href: "#Support", text: "Support" },
  ];
  const footerLinks4 = [
    { href: "#terms", text: "Terms" },
    { href: "#privacy", text: "Privacy" },
    { href: "#cookies", text: "Cookies" },
    { href: "#licenses", text: "Licenses" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <div className="container footer-container">
      <div className="footer-left-content">
        <div className="logo flogo">
          <img src={Logo} alt="Clearfix logo" />
        </div>
        <p className="fdescription">
          ClearLink is your gateway to effortless, high-quality video
          conferencing. Join us in shaping the future of communication!
        </p>
      </div>
      <Links headerText="Product" links={footerLinks} />
      <Links headerText="Company" links={footerLinks2} />
      <Links headerText="Resources" links={footerLinks3} />
      <Links headerText="Legal" links={footerLinks4} />
      <div className="download">
        <span className="footer-span" style={{ display: 'inline-block', color: '#004EEB' }}>Get the app</span>
        <img src={GoogleButton} alt="Playstore" />
        <img src={AppleBotton} alt="Apple store" />
      </div>
    </div>
  );
};

export default FooterLinks;
