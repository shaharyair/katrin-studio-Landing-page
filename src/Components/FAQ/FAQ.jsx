import React, { useState } from "react";
import "./FAQ.css";
import { FaAngleDown } from "react-icons/fa";

const questions = [
  {
    question: "ניסיתי להתאמן המון פעמים ולא ראיתי תוצאות, מה יהיה שונה הפעם ?",
    answer: "ניסיתי להתאמן המון פעמים ולא ראיתי תוצאות, מה יהיה שונה הפעם ?",
  },
  {
    question: "תוך כמה זמן אני אתחיל לראות תוצאות ?",
    answer:
      "יש להתקין את Node.js ואת כלי הפיתוח של React. ניתן להשתמש בכלי כמו create-react-app כדי ליצור את עצמך מבנה מתחיל.",
  },
  {
    question: "איך אפשר להתחיל עם React?",
    answer:
      "יש להתקין את Node.js ואת כלי הפיתוח של React. ניתן להשתמש בכלי כמו create-react-app כדי ליצור את עצמך מבנה מתחיל.",
  },
  {
    question: "איך אפשר להתחיל עם React?",
    answer:
      "יש להתקין את Node.js ואת כלי הפיתוח של React. ניתן להשתמש בכלי כמו create-react-app כדי ליצור את עצמך מבנה מתחיל.",
  },
  {
    question: "אם אף פעם לא התאמנתי ?",
    answer:
      "React הוא ספריית פרונט-אנד לבניית אפליקציות ווב תוך שימוש במודל MVC.",
  },
];

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggle = (i) => {
    setActiveQuestion(i === activeQuestion ? null : i);
  };

  return (
    <>
      <div className='faq-box'>
        <div className='faq'>
          <h1>זמן לשאלות</h1>
          {questions.map((item, i) => (
            <div className='faq-item' key={i}>
              <div className='title' onClick={() => toggle(i)}>
                <h1>{item.question}</h1>
                <FaAngleDown
                  className={
                    activeQuestion === i ? "faq-icon flip" : "faq-icon"
                  }
                />
              </div>
              <div className={activeQuestion === i ? "answer show" : "answer"}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
