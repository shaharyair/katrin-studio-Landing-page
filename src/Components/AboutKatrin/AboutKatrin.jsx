import { React, useState } from "react";
import "./AboutKatrin.css";
import ScrollTrigger from "react-scroll-trigger";

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
                לאורך הרבה שנים עבדתי בעבודה אחרת, אבל רק כשהגעתי לאימון הרגשתי
                מחוברת וקשובה לעצמי, הרגשתי שאני נותנת לעצמי מקום, מתפתחת
                וצומחת. הרגשתי שאני מתמלאת בעוצמה ויכולה לעשות הכל, מתחתי את
                הגבולות שלי. עם הזמן הבנתי שזו התשוקה שלי, לתת בית לכל אותן נשים
                שמחפשות את העוצמה הזאת לכן החלטתי להיות מאמנת כושר וליצור לי
                ולמתאמנות שלי את הבית הזה.
              </p>
              <p>
                אני מאמינה שכשיש לך מקום, חזון וליווי תוכלי להגשים כל דבר שרק
                תרצי. מזמינה אתכן להתרגש ולעשות צעד משמעותי, יאללה בואו לסטודיו!
              </p>
            </div>
          </div>
          <ScrollTrigger onEnter={handleEnter}>
            <img
              src='/src/assets/girlexample.png'
              alt='/'
              className={`about-img ${isVisible ? "about-fade-right" : ""}`}
            />
          </ScrollTrigger>
        </div>
      </div>
    </>
  );
};

export default AboutKatrin;
