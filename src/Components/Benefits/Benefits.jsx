import { React, useState } from "react";
import "./Benefits.css";
import Pic1 from "/src/assets/Benefits/benefits1.jpg";
import Pic3 from "/src/assets/Benefits/benefits2.jpg";
import katrinSquat from "/src/assets/Benefits/katrinSquat.png";
import ScrollTrigger from "react-scroll-trigger";

function Benefits() {
  const [isVisible, setIsVisible] = useState(false);

  const handleEnter = () => {
    setIsVisible(true);
  };

  return (
    <>
      <div className='benefits'>
        <h1>
          <span>בסטודיו של קאתרין</span> - אנחנו עובדים בשיטה שמובילה להצלחה
        </h1>
        <ScrollTrigger onEnter={handleEnter}>
          <div
            className={`benefits-container ${
              isVisible ? "benefits-fade-center" : ""
            }`}
          >
            <div className='benefit'>
              <img src={Pic1} alt='/' />
              <div className='benefits__text-container'>
                <h1 className='benefits-title'>ליווי אישי להצלחה</h1>
                <p className='benefits-content'>
                  בסטודיו שלנו אנחנו אחת למען השנייה, מאוד חשוב לנו לתמוך
                  ולעודד, המטרה שלנו כקהילה בסטודיו היא לדחוף אותך למקסימום שלך
                  ולהגשים את המטרות שלנו.
                </p>
              </div>
            </div>
            <div className='benefit'>
              <img src={Pic2} alt='/' />
              <div className='benefits__text-container'>
                <h1 className='benefits-title'>ליווי אישי להצלחה</h1>
                <p className='benefits-content'>
                  מאמנת כושר אישית וקבוצתית, בוגרת המכללה האקדמית וינגייט. מתמחה
                  באימוני כוח, פונקציונאלי, TRX, פילאטיס מזרון ומכשירים ,עיצוב
                  וחיטוב הגוף.
                </p>
              </div>
            </div>
            <div className='benefit'>
              <img src={Pic3} alt='/' />
              <div className='benefits__text-container'>
                <h1 className='benefits-title'>ליווי אישי להצלחה</h1>
                <p className='benefits-content'>
                  המתכון לחיטוב פלג הגוף התחתון, שמשלב בתוכו תזונה, תרגילים
                  ייעודיים, טכניקה ומספר חזרות, נמצא בקורס הדיגיטלי לעיצוב הישבן
                  והירכיים
                </p>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
}

export default Benefits;
