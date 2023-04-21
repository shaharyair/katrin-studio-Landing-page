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
              <h1>מי אני?</h1>
              <h2>קאתרין יאיר</h2>
            </div>
            <div className='about-text'>
              <p>
                מאמנת כושר ומלווה לאורח חיים בריא. בין כל הטירוף של סדר היום
                העמוס של ימינו, קיימת נטייה לשים את כל העולם לפניכם ואת עצמכם
                במקום האחרון.
              </p>
              <p>
                מאמנת כושר ומלווה לאורח חיים בריא. בין כל הטירוף של סדר היום
                העמוס של ימינו, קיימת נטייה לשים את כל העולם לפניכם ואת עצמכם
                במקום האחרון.
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
