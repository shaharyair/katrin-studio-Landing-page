import { React, useState } from "react";
import "./Benefits.css";
import Pic1 from "/src/assets/benefits1.jpg";
import Pic3 from "/src/assets/benefits2.jpg";
import katrinSquat from "/src/assets/KatrinPhotos/katrinSquat.png";
import ScrollTrigger from "react-scroll-trigger";

function Benefits() {
  const [isVisible, setIsVisible] = useState(false);

  const handleEnter = () => {
    setIsVisible(true);
  };

  return (
    <>
      <div className='benefits'>
        <ScrollTrigger onEnter={handleEnter}>
          <div
            className={`benefits-container ${
              isVisible ? "benefits-fade-center" : ""
            }`}
          >
            <div className='benefit'>
              <img src={Pic1} alt='/' />
              <div className='benefits__text-container'>
                <h1 className='benefits-title'>משפחתיות</h1>
                <p className='benefits-content'>
                  בסטודיו שלנו אחת למען השנייה, מאוד חשוב לנו לתמוך ולעודד,
                  המטרה שלנו כקהילה בסטודיו היא לדחוף אותך למקסימום שלך ולהגשים
                  את המטרות שלנו.
                </p>
              </div>
            </div>
            <div className='benefit'>
              <img src={katrinSquat} alt='/' />
              <div className='benefits__text-container'>
                <h1 className='benefits-title'>מקצועיות</h1>
                <p className='benefits-content'>
                  מאמנת אישית וקבוצתית, בוגרת המכללה האקדמית וינגייט. מתמחה
                  באימוני כוח, פונקציונאלי, TRX, פילאטיס ,עיצוב וחיטוב הגוף.
                </p>
              </div>
            </div>
            <div className='benefit'>
              <img src={Pic3} alt='/' />
              <div className='benefits__text-container'>
                <h1 className='benefits-title'>ליווי אישי וצמוד</h1>
                <p className='benefits-content'>
                  בין אם תעדיפי אימון אישי או קבוצתי.
                  <br /> אני אעבוד איתך כדיי ליצור תוכנית אימונים שתתאים למבנה
                  הגוף, צרכים ומטרות האישיות שלך.
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
