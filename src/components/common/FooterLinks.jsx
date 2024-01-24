import React from "react";
import Logo from "../../assets/images/logo.png";
import Links from "./Links";

const FooterLinks = () => {
  const footerLinks = [
    { href: "#Overview", text: "Overview" },
    { href: "#Features", text: "Features" },
    { href: "#Solutions", text: "Solutions" },
    { href: "#Tutorials", text: "Tutorials" },
    { href: "#Pricing", text: "Pricing" },
  ];
  const footerLinks2 = [
    { href: '#Overview', text: 'Overview' },
    { href: '#Features', text: 'Features' },
    { href: '#Solutions', text: 'Solutions' },
    { href: '#Tutorials', text: 'Tutorials' },
    { href: '#Pricing', text: 'Pricing' },
  ];
  const footerLinks3 = [
    { href: '#Overview', text: 'Overview' },
    { href: '#Features', text: 'Features' },
    { href: '#Solutions', text: 'Solutions' },
    { href: '#Tutorials', text: 'Tutorials' },
    { href: '#Pricing', text: 'Pricing' },
  ];
  const footerLinks4 = [
    { href: '#Overview', text: 'Overview' },
    { href: '#Features', text: 'Features' },
    { href: '#Solutions', text: 'Solutions' },
    { href: '#Tutorials', text: 'Tutorials' },
    { href: '#Pricing', text: 'Pricing' },
  ];
  
  return (
    <div className="container">
      <div className="">
        <div className="logo">
          <img src={Logo} alt="Clearfix logo" />
        </div>
        <p className="">
          ClearLink is your gateway to effortless, high-quality video
          conferencing. Join us in shaping the future of communication!
        </p>
      </div>
      <Links />
      <Links />
      <Links />
      <Links />
    </div>
  );
};

export default FooterLinks;
