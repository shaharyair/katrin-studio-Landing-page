import { React, useState } from "react";
import "./AboutKatrin.css";
import ScrollTrigger from "react-scroll-trigger";
import katrinAbout from "/src/assets/KatrinPhotos/katrinAbout.png";

const AboutKatrin = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleEnter = () => {
    setIsVisible(true);
  };

  return (
    <>
      <div className='about-box' id='aboutkatrin'>
        <div className='about-container'>
          <div className='about-text-container'>
            <div className='about-head'>
              <h1>קצת עליי..</h1>
              <h2>קאתרין יאיר</h2>
            </div>
            <div className='about-text'>
              <p>
                לאורך החיים ספורט היה המקום השמח שלי, כשהגעתי לאימון הרגשתי
                מחוברת וקשובה לעצמי, הרגשתי שאני נותנת לעצמי מקום, מתפתחת
                וצומחת. הרגשתי שאני מתמלאת בעוצמה ויכולה לעשות הכל. מתחתי את
                הגבולות שלי.
              </p>
              <p>
                עם הזמן הבנתי שזו התשוקה שלי, לתת בית לכל אותן נשים שמחפשות את
                העוצמה הזאת, לכן החלטתי להיות מאמנת כושר וליצור לי ולמתאמנות שלי
                את הבית הזה.
              </p>
            </div>
          </div>
          <ScrollTrigger onEnter={handleEnter}>
            <img
              src={katrinAbout}
              alt={katrinAbout}
              className={`about-img ${isVisible ? "about-fade-right" : ""}`}
            />
          </ScrollTrigger>
        </div>
      </div>
    </>
  );
};

export default AboutKatrin;
