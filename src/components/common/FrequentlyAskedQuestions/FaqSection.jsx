import React, { useState } from "react";
import "./faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null); // To track the active/open item

  const faqs = [
    {
      question: "How many participants can join a ClearLink video conference?",
      answer:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      question: "Can I use ClearLink on multiple devices?",
      answer:
        "Yes, you can use ClearLink on multiple devices, including tablets, smartphones, and desktop computers.",
    },
    // ... Add other FAQs here
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h3>{faq.question}</h3>
            <FontAwesomeIcon icon={activeIndex === index ? faMinus : faPlus} />
          </div>
          <div className={`faq-answer ${activeIndex === index ? "open" : ""}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqSection;
