import { React, useState } from "react";
import "./Benefits.css";
import Pic1 from "/src/assets/Benefits/benefits1.jpg";
import Pic3 from "/src/assets/Benefits/benefits2.jpg";
import katrinSquat from "/src/assets/Benefits/katrinSquat.png";
import ScrollTrigger from "react-scroll-trigger";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
              <LazyLoadImage src={Pic1} alt={Pic1} />
              <div className='benefits__text-container'>
                <h1 className='benefits-title'>משפחתיות</h1>
                <p className='benefits-content'>
                  בסטודיו שלנו אנחנו אחת למען השנייה, מאוד חשוב לנו לתמוך
                  ולעודד, המטרה שלנו כקהילה בסטודיו היא לדחוף אותך למקסימום שלך
                  ולהגשים את המטרות שלנו.
                </p>
              </div>
            </div>
            <div className='benefit'>
              <LazyLoadImage src={katrinSquat} alt={katrinSquat} />
              <div className='benefits__text-container'>
                <h1 className='benefits-title'>מקצועיות</h1>
                <p className='benefits-content'>
                  מאמנת כושר אישית וקבוצתית, בוגרת המכללה האקדמית וינגייט. מתמחה
                  באימוני כוח, פונקציונאלי, TRX, פילאטיס מזרון ומכשירים ,עיצוב
                  וחיטוב הגוף.
                </p>
              </div>
            </div>
            <div className='benefit'>
              <LazyLoadImage src={Pic3} alt={Pic3} />
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
