import React from "react";

const Links = ({ headerText, links }) => {
  return (
    <div className="footer-links">
      <span className="footer-span">{headerText}</span>
      <ul className="footer-list">
        {links.map((link, index) => (
          <li key={index} className="footer-item">
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
