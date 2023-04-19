import React from "react";
import "./AboutKatrin.css";

const AboutKatrin = () => {
  return (
    <>
      <div className='about-box'>
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
          <img src='/src/assets/girlexample.png' alt='/' />
        </div>
      </div>
    </>
  );
};

export default AboutKatrin;
