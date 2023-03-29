import React, { useState } from "react";
import "./FAQ.css";
import { FaAngleDown } from "react-icons/fa";

const questions = [
  {
    question: "מה זה React?",
    answer:
      "React הוא ספריית פרונט-אנד לבניית אפליקציות ווב תוך שימוש במודל MVC.",
  },
  {
    question: "מה היתרונות של React?",
    answer:
      "React מאפשר לבנות אפליקציות מורכבות בצורה יעילה ונוחה. יש לו קהילה גדולה של מפתחים ותעשיות המשתמשות בו.",
  },
  {
    question: "איך אפשר להתחיל עם React?",
    answer:
      "יש להתקין את Node.js ואת כלי הפיתוח של React. ניתן להשתמש בכלי כמו create-react-app כדי ליצור את עצמך מבנה מתחיל.",
  },
];

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggle = (i) => {
    setActiveQuestion(i === activeQuestion ? null : i);
  };

  return (
    <div className='faq'>
      {questions.map((item, i) => (
        <div className='faq-item' key={i}>
          <div className='title' onClick={() => toggle(i)}>
            <h1>{item.question}</h1>
            <FaAngleDown
              className={activeQuestion === i ? "icon flip" : "icon"}
            />
          </div>
          <div className={activeQuestion === i ? "answer show" : "answer"}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
