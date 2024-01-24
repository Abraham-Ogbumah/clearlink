import React from "react";
import FaqSection from "./FaqSection";
import "./faq.css"

const FrequentlyAsked = () => {
  return (
    <div className="container faqasked">
      <div className="faqasked-left">
        <span>Support</span>
        <h3>FAQs</h3>
        <p>
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please chat to our friendly team.
        </p>
      </div>
      <div className="faqasked-right">
        <FaqSection />
      </div>
    </div>
  );
};

export default FrequentlyAsked;
