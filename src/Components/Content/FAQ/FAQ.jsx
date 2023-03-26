import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const questions = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.",
    },
    {
      question: "What are props?",
      answer:
        "Props are short for properties, which are used to pass data from one component to another in React.",
    },
  ];

  return (
    <div className='faq'>
      <div className='faq-container'>
        {questions.map((q, index) => (
          <div key={index} className='faq-item'>
            <button
              className={`faq-question ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              {q.question}
            </button>
            {index === activeIndex && <p className='faq-answer'>{q.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
