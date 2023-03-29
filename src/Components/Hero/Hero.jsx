import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import video1 from "/Users/shaharyair/React Projects/Katrin Fitness landing page/vite-project/src/assets/video1.mp4";
import video2 from "/Users/shaharyair/React Projects/Katrin Fitness landing page/vite-project/src/assets/video2.mp4";
import video3 from "/Users/shaharyair/React Projects/Katrin Fitness landing page/vite-project/src/assets/video3.mp4";

function Hero() {
  return (
    <>
      <div className='hero' id='hero'>
        <video src={video2} autoPlay muted loop className='hero__video' />
        <div className='hero__container'>
          <div className='hero__text-head'>
            <h1>קאתרין</h1>
          </div>
          <div className='hero__text'>
            <p>להרגיש בבית</p>
            <p>להתמלא בעוצמה</p>
          </div>
          <div className='hero__buttons-container'>
            <Link to='https://wa.me/972556620441' className='hero__button'>
              לפרטים נוספים <FaWhatsapp className='hero__button-icon' />
            </Link>
            <Link to='tel:+972556620441' className='hero__button'>
              חייגו אלינו <FaPhoneAlt className='hero__button-icon' />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
