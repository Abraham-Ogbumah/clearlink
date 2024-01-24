import React, { useState } from "react";
import "./faq.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

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
    {
      question:
        "Is ClearLink compatible with other video conferencing platforms?",
      answer:
        "Yes, you can use ClearLink on multiple devices, including tablets, smartphones, and desktop computers.",
    },
    {
      question:
        "How does ClearLink ensure the security of my video conferences?",
      answer:
        "Yes, you can use ClearLink on multiple devices, including tablets, smartphones, and desktop computers.",
    },
    {
      question: "Do I need to download any software to use ClearLink?",
      answer:
        "Yes, you can use ClearLink on multiple devices, including tablets, smartphones, and desktop computers.",
    },
    {
      question: "What kind of customer support does ClearLink provide?",
      answer:
        "Yes, you can use ClearLink on multiple devices, including tablets, smartphones, and desktop computers.",
    },
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
            <div className="plus-sign">
              <FontAwesomeIcon
                icon={activeIndex === index ? faMinus : faPlus}
              />
            </div>
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
